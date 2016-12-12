<template>
  <el-table
    :data="tableData"
    height="700"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="商品名称"
      width="100">
    </el-table-column>
    <el-table-column
      prop="pid"
      label="商品编码">
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态">
    </el-table-column>
    <el-table-column
      prop="endline"
      label="下线时间">
    </el-table-column>
    <el-table-column
      prop="id"
      label="序号">
    </el-table-column>
    <el-table-column
      prop="num"
      label="所需助力人数">
    </el-table-column>
    <el-table-column
      prop="time"
      label="用户单纯参加活动时间完成限制">
    </el-table-column>
    <el-table-column
      inline-template
      prop="pic1"
      label="列表页内展示图"
      width="200">
      <div>
        <img :src="row.pic1" alt="" width="180">
      </div>
    </el-table-column>
    <el-table-column
      inline-template
      prop="pic2"
      label="海报背景图"
      width="200">
      <div>
        <img :src="row.pic2" alt="" width="180">
      </div>
    </el-table-column>
    <el-table-column
      inline-template
      prop="btn1"
      label="正常按钮">
      <div>
        <img :src="row.btn1" alt="" width="50">
      </div>
    </el-table-column>
    <el-table-column
      inline-template
      prop="btn2"
      label="即将到期按钮">
      <div>
        <img :src="row.btn2" alt="" width="50">
      </div>
    </el-table-column>
    <el-table-column
      inline-template
      prop="pic3"
      label="详情页内展示图"
      width="200">
      <div>
        <img :src="row.pic3" alt="" width="180">
      </div>
    </el-table-column>
    <el-table-column
      inline-template
      label="操作">
      <div>
        <el-button type="text" @click="edit(row.id)">修改</el-button>
      </div>
    </el-table-column>
  </el-table>
</template>

<script>
import HaibaoOnline from './HaibaoOnlineData'
export default {
  name: 'haibao',
  data () {
    return {
      tableData: HaibaoOnline
    }
  },
  methods: {
    // 修改按钮click事件的触发方法
    edit (id) {
      console.log('调用 edit(), id = ' + id)
    }
  }
}
</script>

<style>

</style>
