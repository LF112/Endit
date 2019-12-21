import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

/*
+----------------------------------------------
|  _     _____ _ _ ____    _   _ _____ _____ 
| | |   |  ___/ / |___ \  | \ | | ____|_   _|
| | |   | |_  | | | __) | |  \| |  _|   | |  
| | |___|  _| | | |/ __/ _| |\  | |___  | |  
| |_____|_|   |_|_|_____(_)_| \_|_____| |_|  
|
| Do you say now or never Or never too late?
+----------------------------------------------
| Made with love by LF112 [https://lf112.net]
| Author: LF112
| ⚡Email: lf@lf112.net / QQ: 2275203821
| ⭐️GitHUB.com/LF112 | Twitter.com/LF_Futiwolf
+----------------------------------------------
*/

Vue.config.productionTip = false

Vue.use(Vuex);
var store = new Vuex.Store({ //store对象
    state: {
        show: false
    }
})

Vue.prototype.bus = new Vue();

new Vue({
    render: h => h(App),
    store
}).$mount('#Endit_App')

console.clear()
console.log(
    "\n %c \u26a1Endit %c https://github.com/LF112/Endit %c BY%c LF112  \n\n",
    "color: #ffffff; background: rgb(0, 145, 228); padding:5px 0;",
    "background:rgba(197, 197, 197, 0.89); padding:5px 0;",
    "color: #ffffff; background: rgba(49, 49, 49, 0.85); padding:5px 0;", "color: rgb(0, 145, 228); background: rgba(49, 49, 49, 0.85); padding:5px 0;"
)