import {GenerateRandomString,GetHashParams} from "~/utils/Types";

export const generateRandomString:GenerateRandomString=(length:number):string=> {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export const getHashParams:GetHashParams=():{access_token:string}|null=> {
    if(process.client){
        let hashParams:any = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = (window as any).location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }else{
        return  null
    }
}



