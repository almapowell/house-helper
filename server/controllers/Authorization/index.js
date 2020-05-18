const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        
        try {
            console.log(req.body)
            const db = req.app.get('db')
            const { first_name, last_name, email, hash, profile_pic, reviews } = req.body

            let foundUser = await db.find_user_by_email(email)
            let user = foundUser[0]

            if (user) {
                return res.status(409).send('email is being used')
            }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            let response = await db.create_user({
                first_name, last_name, email, hash, profile_pic, reviews
            });
            let newUser = response[0]

            delete newUser.password

            req.session.user = newUser
            console.log(req.session)
            res.send(req.session.user)

        } catch (error) {
            console.log('ERROR', error)
            res.status(500).send(error)
        }
    },

    login: async (req, res) => {
        console.log('Back End')
        try {
            const db = req.app.get('db')
            const { email, password } = req.body

            let foundUser = await db.find_user_by_email(email)
            let user = foundUser[0]

            if (!user) {
                return res.status(401).send('email or password incorrect')
            }

            let isAuth = bcrypt.compareSync(password, user.password)

            if (!isAuth) {
                return res.status(401).send('email or password incorrect')
            }

            delete user.password
            req.session.user = user
            console.log(req.session.user)
            res.send(req.session.user)

        } catch (error) {
            console.log('ERROR', error)
            res.status(500).send(error)
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.status(200).send('Session Destroyed')
    },

    currentUser: (req, res) => {
        res.send(req.session.user)
    }
}