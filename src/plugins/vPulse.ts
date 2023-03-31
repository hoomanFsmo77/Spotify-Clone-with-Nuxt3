

export default defineNuxtPlugin(nuxtApp=>{
    nuxtApp.vueApp.directive('pulse',{
        mounted(el:HTMLButtonElement,binding){
            el.addEventListener('click',(ev:Event)=>{
                el.style.animation='scale 0.25s linear'
                binding.value()
            })
            el.addEventListener('animationend',()=>{
                el.style.animation=''
            })
        }
    })


})