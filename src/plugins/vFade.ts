

export default defineNuxtPlugin(nuxtApp=>{
    nuxtApp.vueApp.directive('fade',{
        mounted(el :HTMLElement,binding){
            el.style.opacity='0'
            el.style.visibility='hidden'
            el.style.zIndex='-1'
            el.style.position='fixed'
        },
        updated(el,binding){
            if(binding.value){
                el.style.opacity='1'
                el.style.visibility='visible'
            }else{
                el.style.opacity='0'
                el.style.visibility='hidden'
            }
            el.style.zIndex=binding.arg
        }
    })

})