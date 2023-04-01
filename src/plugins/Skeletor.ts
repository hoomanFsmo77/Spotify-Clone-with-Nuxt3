import 'vue-skeletor/dist/vue-skeletor.css';
import { Skeletor } from 'vue-skeletor';
export default defineNuxtPlugin(nuxtApp=>{
    nuxtApp.vueApp.component(Skeletor.name, Skeletor);
})