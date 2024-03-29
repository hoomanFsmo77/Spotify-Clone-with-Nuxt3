import column from '~/components/grid/column.vue'
import row from "~/components/grid/row.vue";
import containerFull from "~/components/grid/containerFull.vue";
export default defineNuxtPlugin(nuxtApp=>{
    nuxtApp.vueApp.component('row',row);
    nuxtApp.vueApp.component('column',column);
    nuxtApp.vueApp.component('container-full',containerFull);
})