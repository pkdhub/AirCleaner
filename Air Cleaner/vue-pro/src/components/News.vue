<template>
  <div>
      <div class="breadcrumb">
  <div class="container">
    <h2>
      <a href="">首页</a>&gt;<a href="">公司动态</a>
    </h2>
  </div>
</div>
<!--页面主体-->
<div class="main container">
  <div class="news">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <span>{{item.pubTime|datetime}}</span>
        <router-link :to="{name:'nd',params:{nid:item.nid}}">{{item.title}}</router-link></li>
      <!--<li><span>2016-02-21</span><a href="">净美仕新风净化系统助力校园新风行动</a></li>-->
      <!--<li><span>2016-02-21</span><a href="">全国新风行动全面启动助推净美仕战略升级</a></li>-->
      <!--<li><span>2016-02-21</span><a href="">智能空气净化器翻盘净美仕能否领衔?</a></li>-->
    </ul>
  </div>
  <!-- 分页导航-->
  <div class="pages">
    <a @click="getNews(pageNum-1)"  :class="{default:pageNum==1}">上一页</a>
    <a @click="getNews(item)"  :class="{cur:pageNum==item}" v-for="(item, index) in pageCount" :key="index">{{item}}</a>
    <!-- <a>2</a> -->
    <!--<a href="">3</a>-->
    <!--<a href="">4</a>-->
    <!--<a href="">5</a>-->
    <a @click="getNews(pageNum+1)" v-if="pageNum<pageCount">下一页</a>
    <a class="default" v-else>下一页</a>
  </div>
</div>
  </div>
</template>

<script>
export default {
name:"News",
data(){
  return {
    totalRecord:0,   //默认无数据
    pageCount:0,
    pageNum:0,
    pageSize:0,
    data:[]
  }
},
mounted(){
  // this.axios.post("news_select.php","pageNum=1")
  // .then(res => {
  //   console.log(res)
  //   this.data=res.data.data
  //   this.pageCount=res.data.pageCount
  //   this.pageNum=res.data.pageNum
  //   this.pageSize=res.pageSize
  //   this.totalRecord=res.data.totalRecord
  // })
  // .catch(err => {
  //   console.error(err); 
  // })
  this.getNews(1)
},
filters: {
    // {{ 时间戳 | datetime }} -> xxxx年xx月xx日
    datetime(timestamp) {
      // 服务器返回的时间戳是字符串类型
      var ts = parseInt(timestamp);
      var date = new Date(ts);
      var year = date.getFullYear();
      var month = date.getMonth() + 1; //得到的月0~11
      var day = date.getDate();

      // 模板字符串: 外层定界符是 `  反引号
      return `${year}/${month}/${day}`;
    }
  },
  methods:{
    getNews(page){
      if (page<1) return
      this.axios.post("news_select.php","pageNum="+page)
  .then(res => {
    console.log(res)
    this.data=res.data.data
    this.pageCount=res.data.pageCount
    this.pageNum=res.data.pageNum
    this.pageSize=res.pageSize
    this.totalRecord=res.data.totalRecord
  })
  .catch(err => {
    console.error(err); 
  })
    }
  }
}
</script>

<style>

</style>