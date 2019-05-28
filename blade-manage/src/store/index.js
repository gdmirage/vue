import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  /**定义一些常量**/
  state:{
    blade: 1,
  },
  /**会对变更的常量进行计算，如果是字符串，**/
  getters:{
    setBladeValue:function (state) {
      return state.blade+1;
    }
  },
  mutations:{
    toFemale:function (state) {
      state.blade=state.blade+1;
    },
    toMale:function (state) {
      state.blade=state.blade-1;
    }
  },
  /**官方建议使用actions来调用mutations的方法**/
  actions:{
    add(context) {
      context.commit("toFemale");
    },
    reduction(context) {
      context.commit("toMale");
    }
  }
});

/**
 * 注册常量
 */
export default store;
