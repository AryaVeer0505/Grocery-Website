import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({
            success: false,
            message: "Not authorized"
        });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            req.user = { id: tokenDecode.id };  
            next();
        } else {
            return res.json({
                success: false,
                message: "Not authorized"
            });
        }
    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false,
            message: error.message
        });
    }
}

export default authUser;
