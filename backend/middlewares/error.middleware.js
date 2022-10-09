const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const customErrorHandler = (error, req, res, next) => {
    
    const statusCode = error.statusCode || (res.statusCode === 200? 500 : res.statusCode) ;

    res.status(statusCode).json({
        message: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : "Forbidden"
    });
    
}

export {notFound, customErrorHandler};