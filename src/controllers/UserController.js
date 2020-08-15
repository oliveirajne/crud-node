const connection = require('../database/connection');
const bcrypt = require('bcrypt');

module.exports = {

    async index(req, res) {
        const users = await connection('users').select('*');

        return res.json(users);
    },
    
    async create(req, res, next) {
        const { name, email, password } = req.body;

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);

        try {
            await connection('users').insert({
                name,
                email,
                hash
            });

            return res.status(201).send();
        } catch (error) {
            next(error);
        }

    },

    async update(req, res) {
        const { name, email, password } = req.body;
        const { id } = req.params;

        try {
            await connection('users')
            .update({
                name,
                email,
                password
            })
            .where({ id: id });
            
            return res.send();
        } catch (error) {
            next(error);
        }
    },
    
    async delete(req, res, next) {
        const { id } = req.params;

        try {
            await connection(users)
            .where({ id: id})
            .del();

            return res.send();
        } catch (error) {
            next(error);
        }
    }

}