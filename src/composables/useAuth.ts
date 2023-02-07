import {getHashParams, setCookie} from "~/composables/useHelper";


export const useAuth=()=>{
    let {scope}=useAppConfig();
    const router=useRouter()
    const params = getHashParams();
    onMounted(()=>{
        const access_token = params.access_token
        if(access_token){
            setCookie('access_token',access_token,1)
            navigateTo({
                name:'index'
            })
        }else{
            throw createError({
                message:'page not found',
                statusCode:404
            })
        }

    })

}