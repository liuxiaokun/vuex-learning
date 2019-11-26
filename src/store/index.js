import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    count: 1
  },
  /**
   * Getter相当于vue中的computed计算属性，
   * getter的返回值会根据它的依赖被缓存起来，
   * 且只有当它的依赖值发生了改变才会被重新计算，
   * 这里我们可以通过定义vuex的Getter来获取，Getters
   * 可以用于监听、state中的值的变化，返回计算后的结果
   */
  getters: {
    getStateCount: function (state) {
      return state.count + 1
    }
  },

  /**
   * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
   * Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
   * 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
   * 可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload），
   * 大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读。
   * 提交 mutation 的另一种方式是直接使用包含 type 属性的对象：
   */
  mutations: {

    add (state) {
      state.count = state.count + 1
    },

    reduce (state) {
      state.count = state.count - 1
    }
  },

  /**
   * 官方并不建议我们这样直接去修改store里面的值,
   * 而是让我们去提交一个actions,
   * 在actions中提交mutation再去修改状态值。
   */
  actions: {

    addAction (context) {
      context.commit('add')
    },

    reduceAction (context) {
      context.commit('reduce')
    }
  }
})

export default store
