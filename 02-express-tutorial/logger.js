const logger = (req, res, next) => {
    const method = req.method //This the the http method GET etc not a method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)  
    next() 
}

module.exports = logger


