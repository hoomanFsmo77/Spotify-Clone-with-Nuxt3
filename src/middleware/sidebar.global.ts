

export default defineNuxtRouteMiddleware((to,from)=>{
    const sidebarFlag=useState<boolean>('sidebarFlag')
    sidebarFlag.value=false
})