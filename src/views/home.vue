<template>
  <div>
    <el-tabs :active-name="activeName">
      <el-tab-pane label="商品列表" name="first">
        <el-row>
          <haibao></haibao>
        </el-row>
        <el-row>
          <el-col>
            <el-button @click="addProd()">添加新的商品</el-button>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="已上新商品" name="second">
        <haibao-online></haibao-online>
      </el-tab-pane>
      <el-tab-pane label="添加助力人数" name="third">
        <el-button @click="addZhuliNum()">添加助力人数</el-button>
      </el-tab-pane>
      <el-tab-pane label="添加新的商品" name="forth">
        <el-row :gutter="20">
          <el-col :span="6">
            <h4>Demo</h4>
            <form-demo></form-demo>
          </el-col>
          <el-col :span="6">
            <h4>添加新的商品</h4>
            <add-product></add-product>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
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
import Haibao from '../components/haibao'
// import 已上线商品的列表页
import HaibaoOnline from '../components/haibao-online'
// import 添加新的商品的Form页
import AddProduct from '../components/addProduct'
import FormDemo from '../components/form-demo'

// 添加助力人数api
const addZhuliNumberApi = 'http://pin.haibaozhuli.test.willar.net/manage/addZhuliNumber'

export default {
  name: 'app',
  components: {
    Haibao,
    HaibaoOnline,
    AddProduct,
    FormDemo
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
      activeName: 'first'
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
.el-tabs {
  width: 100%;
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
