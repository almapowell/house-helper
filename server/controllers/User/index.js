const bcrypt = require('bcryptjs')

module.exports = {
    signUp: async (req, res) => {
        try {
            console.log(req.body)
            const db = req.app.get('db')
            const { email, password, profile_pic, reviews } = req.body
            const first_name = req.body.firstName;
            const last_name = req.body.lastName;

            let foundUser = await db.users.find_user_by_email(email)
            let user = foundUser[0]

            if (user) {
                return res.status(409).send('email is being used')
            }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            let response = await db.users.create_user({
                first_name, last_name, email, hash, profile_pic, reviews
            });

            let newUser = response[0]

            delete newUser.password

            req.session.user = newUser
            console.log(123456, req.session, 'request session')
            res.send(newUser)

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