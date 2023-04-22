import {User_Information} from "~/utils/Types";
import {Music} from "~/store/music";

export const useStates=()=>{
    const userData=useState<User_Information>('userData')
    const userDataFetchFlag=useState<boolean>('userDataFetchFlag',()=>false)
    const access_token=useState<string>('accessToken')
    const isLogin=useState('isLogin')
    const sidebarFlag=useState<boolean>('sidebarFlag')
    const recentlyPlayData=useState<any[]>('recentlyPlayData')
    const errorModalFlag=useState<boolean>('errorModalFlag')

    return{
        userData,access_token,userDataFetchFlag,sidebarFlag,recentlyPlayData,errorModalFlag,isLogin
    }
}

export const useMusicStore=()=>{
    const musicStore=Music()
    const getTrackId=computed<string>(()=>musicStore.getTrackId)
    const getTrackFullInfo=computed<any>(()=>musicStore.getTrackFullInfo)




    return{
        musicStore,getTrackId,getTrackFullInfo
    }

}