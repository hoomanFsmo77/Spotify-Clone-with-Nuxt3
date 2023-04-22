import * as querystring from "querystring";
import {generateRandomString} from "~/utils/Helper";

export default defineEventHandler(async e=>{
    const {redirect_uri,scope,client_id}=useRuntimeConfig()
    const state=generateRandomString(16)
    const queryparams=querystring.stringify({
        client_id:client_id,
        response_type:'code',
        redirect_uri:redirect_uri,
        state:state,
        scope:scope
    })
    return `https://accounts.spotify.com/authorize?${queryparams}`
})