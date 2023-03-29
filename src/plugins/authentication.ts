export default defineNuxtPlugin(async  nuxtApp=>{
    const {public:{endpoint}}=useRuntimeConfig()
    const isLogin=useState('isLogin',()=>false)
    const access_token=useState<string|null>('access_token',()=>null)
    const headers:any=useRequestHeaders(['cookie'])
    try {
        const user:any=await $fetch(endpoint.me,{
            headers:headers
        })
        isLogin.value=true
        access_token.value=user.token
    }catch (e) {
        isLogin.value=false
        access_token.value=null
        try {
            const logout=await $fetch(endpoint.logout)
            navigateTo({name:'LOGIN'})
        }catch (err) {}

    }
})