import {setCookie, createError,readBody} from "h3";

export default defineEventHandler(async e=>{
    const body=await readBody(e)
    const {cookieName}=useRuntimeConfig()
    if(body.authorization){
         setCookie(e,cookieName,body.authorization,{
            httpOnly:true,
            secure:true,
            maxAge:60*60, // 1 hour
            path:'/'
        })
        return {
            statusCode:200,
            message:'Token is placed in cookie!',
            token:body.authorization
        }
    }else{
        return  createError({
            statusCode:504,
            statusMessage:'access token required!'
        })
    }




})