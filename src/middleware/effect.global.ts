import {useStates} from "~/composables/useStore";


export default defineNuxtRouteMiddleware((to,from)=>{
    const {sidebarFlag}=useStates()
    const backwardFlag=useState<boolean>('backwardFlag')
    sidebarFlag.value=false
    backwardFlag.value = !(from.name === 'AUTH' && to.name === 'DASHBOARD_INDEX');
})