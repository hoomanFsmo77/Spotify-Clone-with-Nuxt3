import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAlignJustify ,faHouse,faBook,faSquarePlus,faChevronLeft,faChevronRight,faCaretDown,faUpRightFromSquare,faPlay,faPause,faShuffle,faBackwardStep,faForwardStep,faRepeat,faMicrophone,faBars,faVolumeHigh} from '@fortawesome/free-solid-svg-icons'
import {faMixer,faSearchengin,faGratipay} from '@fortawesome/free-brands-svg-icons'
import {faCircleDown,faHeart} from '@fortawesome/free-regular-svg-icons'

export default defineNuxtPlugin(nuxtApp=>{
    library.add(faAlignJustify,faMixer,faHouse,faSearchengin,faBook,faSquarePlus,faGratipay,faCircleDown,faChevronLeft,faChevronRight,faCaretDown,faUpRightFromSquare,faPlay,faPause,faHeart,faShuffle,faBackwardStep,faForwardStep,faRepeat,faMicrophone,faBars,faVolumeHigh)
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})