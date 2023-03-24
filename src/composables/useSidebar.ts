import {getSidebarList} from "~/utils/Helper";
import {Sidebar_List} from "~/utils/Types";


export const useSidebar=()=>{
    const {userData}=useStates()
    const sidebarData=ref<Sidebar_List|{}>({})
    const {$spotifyApi}=useNuxtApp()
    const userPlayListItems=useState('userPlayListItems',()=>[])
    watch(
        ()=>userData.value,
        ()=>{
            if(userData.value){
                sidebarData.value=getSidebarList(userData?.value?.id)
                $spotifyApi.getUserPlaylists(userData?.value?.id).then((data:any)=>{
                    userPlayListItems.value=data.body.items
                })
            }
        }
    )
    return{
        sidebarData,userPlayListItems
    }
}