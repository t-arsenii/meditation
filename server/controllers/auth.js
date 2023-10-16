
import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//Registration
// Register user
export const register = async (req, res) => {
    try {
        const { email, password, username } = req.body
        console.log(req.body);

        const isUsed = await User.findOne({ username })

        if (isUsed) {
            return res.json({
                message: 'Ten username już jest zajęty.',
            })
        }
        console.log(email, password, username);
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            email,
            password: hash,
            username,
        })

       

        await newUser.save()

        res.json({
            newUser,
            message: 'Regestracja udała się.',
        })
    } catch (error) {
        console.error(error);
        res.json({ message: 'Nie udało się załorzyć konto.' })
    }
}

//Login
export const login =async (req, res) =>{
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            return res.json({
                message: 'Taki użytkownik nie istnieje.',
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.json({
                message: 'Niewlaściwe hasło.',
            })
        }

        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: '30d' },
        )

        res.json({
            token,
            user,
            message: 'Jesteś w systemie.',
        })
    } catch (error) {
        console.log(error);
        res.json({ message: 'Bląd przy autoryzacji.' })
    }
}

//Get ME
export const getMe =async (req, res) =>{
    try {
        const user = await User.findById(req.userId)

        if (!user) {
            return res.json({
                message: 'Taki użytkownik nie istnieje .',
            })
        }
        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: '30d' },
        )

        res.json(
            user,
            token,
        )

    } catch (error) {
        res.json({
            message: 'Nie ma dostępu',
        }
        )
    }
}