import {createError, getCookie} from "h3";

export default defineEventHandler(async e=> {
    const {cookieName}=useRuntimeConfig()
    const token=getCookie(e,cookieName)
    if(token){
        return {
            statusCode:200,
            message:'Token is accessible!',
            token:token
        }
    }else{
        return  createError({
            statusCode:504,
            statusMessage:'access token required!'
        })
    }

})