<template>
  <div>
    <el-tabs :active-name="activeName">
      <el-tab-pane label="商品列表" name="first">
        <el-row>
          <product-table :table-data="tableData"></product-table>
        </el-row>
        <el-row>
          <el-col>
            <el-button @click="addProd()">添加新的商品</el-button>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="已上新商品" name="second">
        <el-row>
          <product-table :table-data="tableOnlineData"></product-table>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="添加助力人数" name="forth">
        <el-button @click="addZhuliNum()">添加助力人数</el-button>
      </el-tab-pane>
      <el-tab-pane label="添加新的商品" name="fifth">
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
// import 商品的列表页
import ProductTable from '../components/product'

// import 添加新的商品的Form页
import AddProduct from '../components/add-product'
import FormDemo from '../components/form-demo'

import Api from '../components/api.js'

// 添加助力人数api
const addZhuliNumberApi = 'http://pin.haibaozhuli.test.willar.net/manage/addZhuliNumber'

export default {
  name: 'app',
  components: {
    ProductTable,
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
      activeName: 'first',
      tableData: null,
      tableOnlineData: null
    }
  },
  created () {
    this.getProd()
    this.getProdOnline()
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
    },
    getProd () {
      // 请求参数
      let params = {}

      // 异步请求 addZhuliNumberApi
      this.$http.post(Api + '/manage/productList', params).then(
      (response) => {
        let res = response.body
        if (!res.errCode) {
          console.log(res.data)
          this.$set(this, 'tableData', res.data.productData)
        } else {
          window.alert(res.errCode)
        }
      }, (response) => {
        return 'error callback'
      })
    },
    getProdOnline () {
      let resource = this.$resource(Api + '/manage/productList')

      resource.get({state: '1'}).then((response) => {
        this.$set(this, 'tableOnlineData', response.body.data)
      })
    }
  }
}
</script>

<style scoped>
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
