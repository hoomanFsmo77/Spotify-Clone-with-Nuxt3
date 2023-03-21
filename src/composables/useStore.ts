import {User_Information} from "~/utils/Types";


export const useStates=()=>{
    const userData=useState<User_Information>('userData')


    return{
        userData
    }
}