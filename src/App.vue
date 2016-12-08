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
// import Hello from './components/Hello'
import Haibao from './components/haibao'

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
      state: true,
      addUrl: 'http://pin.haibaozhuli.test.willar.net/manage/addZhuliNumber',
      url: 'http://market.cmbc.test.youngmanager.cn/test4'
    }
  },
  methods: {
    addProd () {
      console.log('add')
    },

    toggleState () {
      this.state = !this.state
    },
    addZhuliNum () {
      this.$http.post(this.url).then((response) => {
        console.log('success callback')
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
