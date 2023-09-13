const ErrorHandler = require("~/utils/ErrorHandle");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("~/models/user");

exports.isAuthenticated = catchAsyncErrors(async(req,res,next) => {
    const {accessToken} = req.cookies;
    if(!accessToken){return next(new ErrorHandler("Please login to continue", 401))}
    const verifyUser = jwt.verify(accessToken, process.env.JWT_ACCESSTK_SECRET);
    req.user = verifyUser.sub
    next();
});



