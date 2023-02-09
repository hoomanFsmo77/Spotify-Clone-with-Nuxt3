import {generateRandomString} from "~/composables/useHelper";


export const useLogin=()=>{
    const {public:{client_id,redirect_uri,stateKey,scope}}=useRuntimeConfig()
    const loginHandler = () => {
        if(process.client){
            const state = generateRandomString(16);
            localStorage.setItem(stateKey, state);
            let url = 'https://accounts.spotify.com/authorize';
            url += '?response_type=token';
            url += '&client_id=' + encodeURIComponent(client_id);
            url += '&scope=' + encodeURIComponent(scope);
            url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            url += '&state=' + encodeURIComponent(state);
            (window as any).location = url
        }
    }

    return{
        loginHandler
    }
}