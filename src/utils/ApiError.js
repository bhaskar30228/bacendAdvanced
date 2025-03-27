class ApiError extends Error{
    constructor(
        statuscode,
        message="Something went wrong",
        err=[],
        statck=""
    ){
        super(message)
        this.statuscode=statuscode
        this.data=null
        this.message=message
        this.success=falset
        this.err= err
        

        if(statck){
            this.stack=statck
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}