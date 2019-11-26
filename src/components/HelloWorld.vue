<template>
    <div class="hello">
        <h2>直接获取的：{{this.$store.state.count}}</h2>
        <h2>getters获取计算后的：{{this.$store.getters.getStateCount}}</h2>
        <button @click="addFunc">+</button>
        <button @click="reduceFunc">-</button>
        <!-- 如果我们不喜欢这种在页面上使用this.$store.state.count
          和this.$store.dispatch('funName')这种很长的写法，
          那么我们可以使用mapState、mapGetters、mapActions就不会这么麻烦了
        -->
        <div style="border: 1px; color: red;">
            {{count1}}
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },

    methods: {
      addFunc () {
        // this.$store.commit('add')
        // 官方不建议上面写法，更建议楼下写法
        this.$store.dispatch('addAction')
      },

      reduceFunc () {
        this.$store.commit('reduce')
      }
    },

    computed: {
      ...mapState({
        count1: state => state.count
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
