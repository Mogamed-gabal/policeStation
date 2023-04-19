class AppError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode,
        this.error='error'
    }
}
function catchErrore(service){
    return(req,res,next)=>{
        service(req,res).catch((err)=>{
            next(err)
        })
    }
    }
module.exports=AppError