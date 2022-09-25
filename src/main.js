import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/index.css'
import 'lib-flexible'
import './directives/index.ts'
import { Toast , Dialog } from 'vant';

Vue.use(Toast);
Vue.use(Dialog);





// function buddle_sort(arr,fn){
//   let  len = arr.length
//   while(len--){
//     for (let i = 0; i < len; i++) {
//       if( fn( arr[i] , arr[i + 1] ) > 0 ){
//           [arr[i],arr[i+1]] = [arr[i+1],arr[i]] 
//       } 
//     }
//   }
// }

// let arr = [7, 4, 3, 67, 34, 1, 8]
// // buddle_sort(arr, (a, b) => a - b) // [ 1, 3, 4, 7, 8, 34, 67 ]
// // buddle_sort(arr, (a, b) => b - a) // [ 67, 34, 8, 7, 4, 3, 1 ]

// console.log('buddle_sort()',buddle_sort(arr,(a,b) => a-b))







Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next() 
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
