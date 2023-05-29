import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler( async (req, res , next) => {
    let token;
    //Can do this cos we have added cookie parser in server.js
    token = req.cookies.jwt;

    if(token){
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            next();

        } catch (err) {
            res.status(401);
            throw new Error('Not authorized, Invalid Token');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, No Token');
    }
});

export {
    protect,
}