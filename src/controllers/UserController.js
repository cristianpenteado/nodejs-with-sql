import User from '../models/User'

export default {
    async store(req, res) {
        const { name, email } = req.body

        const user = await User.create({ name, email })

        return res.json(user)
    },
    async index(req, res) {
        const users = await User.findAll()
        return res.json(users)
    }
}