import menuModule from './Menu.ts';
import { createStore } from "vuex";

const store = createStore({
   state:{
      name: "Vue"
   }
})

store.registerModule('menu', menuModule);

export default store