
export const useAuth=()=>{
    const route=useRoute()
    const {isLogin,access_token}=useStates()
    const redirectToDashboard =async () => {
        try {
            const auth:any=await $fetch('/api/token',{
                body:route.query.code,
                method:'POST'
            })
            access_token.value=auth.access_token
            if(process.client){
                localStorage.setItem('spotify-refresh-token',auth.refresh_token)
            }
            isLogin.value=true
            navigateTo('/')
        }catch (err) {
            navigateTo('/login')
        }
    }

    onMounted(async ()=>{await redirectToDashboard()})
    return{
        redirectToDashboard
    }

}