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
        <el-button type="text">修改</el-button>
      </div>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'haibao',
  data () {
    return {
      tableData: [{
        name: '清风原木纯品2层150抽4包抽面纸',
        pid: 'ONE',
        state: '正常上线',
        endline: '2016-12-18 00:00:00',
        id: '1',
        num: '30',
        time: '72小时',
        pic1: 'http://pin.haibaozhuli.cdn.willar.net/pin1212_test/entranceImg/20161207101159_ONE_entrance.png',
        pic2: 'http://pin.haibaozhuli.cdn.willar.net/pin1212_test/background/20161207100214_ONE_posterBg.png',
        btn1: 'http://pin.haibaozhuli.cdn.willar.net/pin1212_test/buttonStartedImg/20161207100214_ONE_btnStarted.png',
        btn2: 'http://pin.haibaozhuli.cdn.willar.net/pin1212_test/buttonEndImg/20161207100214_ONE_btnEnd.png',
        pic3: 'http://pin.haibaozhuli.cdn.willar.net/pin1212_test/detailImg/20161207100214_ONE_detail.png'
      }, {
        name: '清风原木纯品2层150抽4包抽面纸',
        pid: 'ONE',
        state: '正常上线',
        endline: '2016-12-18 00:00:00',
        id: '1',
        num: '30',
        time: '72小时',
        pic1: 'http://pin.haibaozhuli.cdn.willar.net/pin1212_test/entranceImg/20161207101159_ONE_entrance.png',
        pic2: 'http://pin.haibaozhuli.cdn.willar.net/pin1212_test/background/20161207100214_ONE_posterBg.png',
        btn1: 'http://pin.haibaozhuli.cdn.willar.net/pin1212_test/buttonStartedImg/20161207100214_ONE_btnStarted.png',
        btn2: 'http://pin.haibaozhuli.cdn.willar.net/pin1212_test/buttonEndImg/20161207100214_ONE_btnEnd.png',
        pic3: 'http://pin.haibaozhuli.cdn.willar.net/pin1212_test/detailImg/20161207100214_ONE_detail.png'
      }]
    }
  }
}
</script>

<style>

</style>
