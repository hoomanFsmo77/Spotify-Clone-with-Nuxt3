import {useStates} from "~/composables/useStore";


export default defineNuxtRouteMiddleware((to,from)=>{
    const {sidebarFlag}=useStates()
    const backwardFlag=useState<boolean>('backwardFlag')
    sidebarFlag.value=false
    backwardFlag.value=true

})