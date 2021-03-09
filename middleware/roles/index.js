export const roles = (req,res,next)=>{
    let roleSession = req.roleSession
    let roleRequired = req.roleRequired
    if(roleRequired.includes(roleSession)){
        next()
    }else{
        next('No tienes permisos para acceder a esta información')
    }
    
}