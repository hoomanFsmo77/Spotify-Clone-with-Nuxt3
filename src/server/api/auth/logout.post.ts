import {setCookie} from "h3";


export default defineEventHandler(async ev=>{
    const {cookieName}=useRuntimeConfig()
    setCookie(ev,cookieName,'',{
        httpOnly:true,
        secure:true,
        maxAge:new Date(0).getTime(),
        path:'/'
    })
    return 'cookie removed'
})