type cookie='access_token'


export const generateRandomString=(length:number)=> {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export const getHashParams=()=> {
    if(process.client){
        let hashParams:any = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = (window as any).location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
}

export const setCookie = (name:string,hash:string,hour:number) => {
    let date=new Date()
    date.setTime(date.getTime() + 60*60*1000)
    document.cookie=`${name}=${hash};path=/;expires=${date}`
}

export const getCookie = (name:cookie) => {
    if(process.client){
        const cookie=document.cookie
        if(cookie.includes(name)){
            return cookie.slice(cookie.indexOf('=')+1)
        }else{
            return  null
        }
    }
}
