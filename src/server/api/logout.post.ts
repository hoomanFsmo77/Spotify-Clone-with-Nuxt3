import {setCookie} from "h3";

export default defineEventHandler(async ev=>{
    setCookie(ev,'spotify_access_token','',{
        httpOnly:true,
        secure:true,
        maxAge:new Date(0).getTime(),
        path:'/'
    })
    return 'cookie removed'
})