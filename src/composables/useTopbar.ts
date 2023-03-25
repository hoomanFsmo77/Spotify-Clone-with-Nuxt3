
export const useTopbar=()=>{
    const router=useRouter()
    const backwardFlag=useState<boolean>('backwardFlag',()=>false)
    const forwardFlag=useState<boolean>('forwardFlag',()=>false)
    const visitedPageCounter=reactive<any>({
        prev:0 as number,
        next:0 as number
    })
    const gotoPreviousRoute = () => {
      if(backwardFlag.value){
          router.back()
          forwardFlag.value=true
          visitedPageCounter.prev++
          visitedPageCounter.next--
      }
    }
    const gotoNextRoute = () => {
        if(forwardFlag.value){
            router.forward()
            visitedPageCounter.next++
            visitedPageCounter.prev--
            if(visitedPageCounter.next===0 && visitedPageCounter.prev===0){
                forwardFlag.value=false
            }
        }
    }

    return{
        gotoPreviousRoute,gotoNextRoute,backwardFlag,forwardFlag
    }
}