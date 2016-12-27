<template>
  <el-dialog title="统计数据" v-model="visible" @open="openDialog" @close="closeDialog">
    <el-table :data="gridData">
      <el-table-column property="offTime" label="产品下线时间" width="150"></el-table-column>
      <el-table-column property="name" label="商品名称" width="200"></el-table-column>
      <el-table-column property="createdTime" label="添加产品时间"></el-table-column>
      <el-table-column property="finishNum" label="完成助力的海报数量"></el-table-column>
      <el-table-column property="unFinishNum" label="生成后未完成助力的海报数量"></el-table-column>
      <el-table-column property="finishNew" label="完成的海报拉来的新用户数"></el-table-column>
      <el-table-column property="unFinishNew" label="未完成的海报拉来的新用户数"></el-table-column>
      <el-table-column property="posterNum" label="生成海报数量"></el-table-column>
      <el-table-column property="newUser" label="拉来的新用户总数"></el-table-column>
      <el-table-column property="time" label="海报完成时间分布"></el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
import Api from './api.js'

export default {
  name: 'record',
  props: ['code', 'dialogTableVisible'],
  computed: {
    visible () {
      return this.dialogTableVisible
    }
  },
  data () {
    return {
      gridData: null
    }
  },
  created () {

  },
  methods: {
    openDialog () {
      this.gridData = null
      this.getStats(this.code)
    },
    closeDialog () {
      console.log('child close event')
      this.$emit('closeDialog')
    },
    getStats (code) {
      let resource = this.$resource(Api + '/manage/record')

      resource.get({code: code}).then((response) => {
        console.log(response)
        this.$set(this, 'gridData', [response.body])
        // return [response.body]
      }, (response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style>

</style>
