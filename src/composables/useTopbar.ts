
export const useNavigation=()=>{
    const router=useRouter()
    const backwardFlag=useState<boolean>('backwardFlag',()=>false)
    const forwardFlag=useState<boolean>('forwardFlag',()=>false)
    const visitedPageCounter=reactive<any>({
        prev:0 as number,
        next:0 as number
    })
    const gotoPreviousRoute = () => {
        const isAuthPage=process.client && window.history.state.back.includes('authentication')
      if(backwardFlag.value && !isAuthPage){
          router.back()
          forwardFlag.value=true
          visitedPageCounter.prev++
          visitedPageCounter.next--
      }else if(isAuthPage){
          backwardFlag.value=false
      }
    }
    const gotoNextRoute = () => {
        if(forwardFlag.value && process.client){
            router.forward()
            visitedPageCounter.next++
            visitedPageCounter.prev--
            if(visitedPageCounter.next===0 && visitedPageCounter.prev===0){
                forwardFlag.value=false
            }
        }
    }
    onMounted(()=>{
        if(process.client && window.history.state.back.includes('authentication')){
            backwardFlag.value=false
        }
    })


    return{
        gotoPreviousRoute,gotoNextRoute,backwardFlag,forwardFlag
    }
}