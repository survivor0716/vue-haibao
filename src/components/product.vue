<template>
  <div>
    <el-table
      :data="tableData"
      height="700"
      border
      style="width: 100%"
      @row-click="handleRowClick">
      <el-table-column
        prop="name"
        label="商品名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="abb_name"
        label="商品简称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="code"
        label="商品编码">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="off_time"
        label="下线时间">
      </el-table-column>
      <el-table-column
        prop="sort"
        label="序号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="require_num"
        label="所需助力人数"
        width="100">
      </el-table-column>
      <el-table-column
        prop="limit_time"
        label="用户单纯参加活动时间完成限制"
        width="100">
      </el-table-column>
      <el-table-column
        inline-template
        prop="entrance_img"
        label="列表页内展示图"
        width="200">
        <div>
          <img :src="row.entrance_img" alt="" style="width:100%">
        </div>
      </el-table-column>
      <!-- <el-table-column
        inline-template
        prop="poster_bg_img"
        label="海报背景图"
        width="200">
        <div>
          <img :src="row.poster_bg_img" alt="" width="180">
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        prop="button_started_img"
        label="正常按钮">
        <div>
          <img :src="row.button_started_img" alt="" width="50">
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        prop="button_end_img"
        label="即将到期按钮">
        <div>
          <img :src="row.button_end_img" alt="" width="50">
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        prop="detail_img"
        label="详情页内展示图"
        width="200">
        <div>
          <img :src="row.detail_img" alt="" width="180">
        </div>
      </el-table-column> -->
      <el-table-column
        inline-template
        label="操作">
        <div>
          <el-button type="text" @click="edit(row.id)">修改</el-button>
        </div>
      </el-table-column>
    </el-table>
    <stats-dialog :code="code" :dialog-table-visible="dialogTableVisible" @closeDialog="closeDialog"></stats-dialog>
  </div>
</template>

<script>
import StatsDialog from './stats.vue'

export default {
  name: 'product',
  components: {
    StatsDialog
  },
  props: ['tableData'],
  data () {
    return {
      gridData: null,
      dialogTableVisible: false,
      code: null
    }
  },
  created () {

  },
  methods: {
    // 修改按钮click事件的触发方法
    edit (id) {
      console.log('调用 edit(), id = ' + id)
    },
    handleRowClick (row, event, column) {
      console.log(row.id)
      this.code = row.code
      this.dialogTableVisible = true
    },
    closeDialog () {
      console.log('parent get $emit')
      this.dialogTableVisible = false
    }
  }
}
</script>

<style>

</style>
