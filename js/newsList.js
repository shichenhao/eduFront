function GetQueryString(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}



var app = new Vue({
  el: '#app',
  data: {
    pages:{
      index:0,
      ls:0,
    },
    type:'',
    navName:'',
    list:[],
    hotList:[]
  },
  methods:{
    getList:function(type){
        var _this = this
         $.ajax({
            url:'/edu/user/findMNewsByPage',
            method:'POST',
            data:{
                limit:20,
                start:_this.pages.index * 20,
                type:type
            },
            success:function(data){
                _this.pages.ls = data.value.total % 20 === 0 ? data.value.total /20 : parseInt(data.value.total/20)+1
                _this.list = data.value.list
            }
        })
    },
    clickPage(index){
      this.pages.index = index
      this.getList(this.type)
    },
    getHot:function(type){
        var _this = this
         $.ajax({
            url:'/edu/user/findMNewsByPage',
            method:'POST',
            data:{
                limit:10,
                sortStr:'clickCount'
            },
            success:function(data){
                _this.hotList = data.value.list
            }
        })
    },
    setNavName:function(type){
      switch (parseInt(type)){
        case 1:
        this.navName = '新闻热点'
        break;
        case 2:
        this.navName = '师资培训'
        break;
        case 3:
        this.navName = '艺术节'
        break;
        case 4:
        this.navName = '艺术研学'
        break;
        case 5:
        this.navName = '剧目教材'
        break;
        case 6:
        this.navName = '市场合作'
        break;
      }
      console.log(this.navName)
    }
  },
  created(){
    this.type = GetQueryString('type')
    this.getList(this.type)
    this.getHot(this.type)
    this.setNavName(this.type)
  }
})