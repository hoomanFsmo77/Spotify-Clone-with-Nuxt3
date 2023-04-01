

export default defineNuxtPlugin(nuxtApp=>{
    nuxtApp.vueApp.directive('load',{
        mounted(el:HTMLImageElement,binding){
            const nextEl=el.nextElementSibling as HTMLSpanElement
            el.style.opacity='0'
            el.style.visibility='hidden'
            el.addEventListener('load',()=>{
                nextEl.style.display='none'
                el.style.opacity='1'
                el.style.visibility='visible'
            })
        }
    })




})