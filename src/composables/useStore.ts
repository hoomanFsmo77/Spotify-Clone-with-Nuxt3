import {User_Information} from "~/utils/Types";


export const useStates=()=>{
    const userData=useState<User_Information>('userData')
    const userDataFetchFlag=useState<boolean>('userDataFetchFlag',()=>false)
    const access_token=useState<string>('access_token')


    return{
        userData,access_token,userDataFetchFlag
    }
}