import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        // domain: 'localhost:8080', //保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
        userInfo: { //保存用户信息
            nick: null,
            ulevel: null,
            uid: null,
            portrait: null
        }
    },
    mutations: {
        //更新用户信息
        updateUserInfo(state, newUserInfo) {
            state.userInfo = newUserInfo;
        }
    }
})
export default new Vuex.Store({
    // state
});