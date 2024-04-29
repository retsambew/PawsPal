import jwt from "jsonwebtoken";
const secret = "eriuih34ty893g9ergeh";

const fetchUser = (req,res,next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send('Please authenticate using right token');
    }

    try {   
        const data = jwt.verify(token, secret);
        req.user = data.user;
        next();
    } catch (error) {
        console.error(error);
    }
}

export default fetchUser;