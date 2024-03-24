function check(req,res){
    return res.json({
        sucees:true,
        message:"ok",
        erorr:{},
        data:{}
    })
}
module.exports={
    check
}