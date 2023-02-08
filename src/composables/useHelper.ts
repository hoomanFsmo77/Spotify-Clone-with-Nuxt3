import SpotifyWebApi from "spotify-web-api-node";
import {CookieName,GenerateRandomString,GetHashParams,SetCookie,GetCookie} from "~/composables/useTypes";

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

export const setCookie:SetCookie = (name:string,hash:string):void => {
    let date=new Date()
    date.setTime(date.getTime() + 60*60*1000)
    document.cookie=`${name}=${hash};path=/;expires=${date}`
}

export const getCookie:GetCookie = (name:CookieName):string|null => {
    if(process.client){
        const spotifyApi=new SpotifyWebApi()
        const cookie=document.cookie
        if(cookie.includes(name)){
            const access_token=cookie.slice(cookie.indexOf('=')+1)
            spotifyApi.setAccessToken(access_token)
            return access_token
        }else{
            return  null
        }
    }else{
        return  null
    }
}
