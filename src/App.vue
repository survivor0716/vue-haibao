<template>
  <div id="app">
    <el-row>
      <haibao></haibao>
    </el-row>
    <el-row>
      <el-col :span="4">
        <el-button @click="addProd()">添加新的商品</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="text">查看已上线商品</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="text" @click="addZhuliNum()">添加助力人数</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <p>是否开启请求科玛进行新用户验证<p>
        <p>当前状态: {{currentState}} <el-button @click="toggleState()">{{btnState}}</el-button></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import 已添加商品的列表页
import Haibao from './components/haibao'

// 添加助力人数api
const addZhuliNumberApi = 'http://pin.haibaozhuli.test.willar.net/manage/addZhuliNumber'

export default {
  name: 'app',
  components: {
    Haibao
  },
  computed: {
    currentState () {
      return this.state ? '已开启' : '已关闭'
    },
    btnState () {
      return this.state ? '关闭' : '开启'
    }
  },
  data () {
    return {
      state: true
    }
  },
  methods: {
    // 添加新的商品按钮click事件的触发方法
    addProd () {
      // 请求参数
      let params = {}
      console.log('调用 addProd(), params = ', params)

      // 异步请求 addZhuliNumberApi
      this.$http.post(addZhuliNumberApi, params).then(
      (response) => {
        console.log(response.body)
      }, (response) => {
        console.log('error callback')
      })
    },

    // 开启、关闭按钮click事件的触发方法
    toggleState () {
      this.state = !this.state
    },

    // 添加助力人数按钮click事件的触发方法
    addZhuliNum () {
      // 请求参数
      let params = {
        uid: '2',
        code: '123'
      }
      console.log('调用 addZhuliNum(), params = ', params)

      // 异步请求 addZhuliNumberApi
      this.$http.post(addZhuliNumberApi, params, {
        // use before callback
        before (request) {
          // abort previous request, if exists
          // 如果存在重复请求，终止上一次请求
          if (this.previousRequest) {
            this.previousRequest.abort()
            console.log('abort request')
          }

          // set previous request on Vue instance
          // 对Vue实例添加previousRequest属性
          this.previousRequest = request
        }
      }).then(
      (response) => {
        console.log(response.body)
      }, (response) => {
        console.log('error callback')
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  text-align: left;
}
</style>
