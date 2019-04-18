function GetQueryString(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}



var app = new Vue({
  el: '#app',
  data: {
    id: '',
    navName: '',
    type: '',
    detail: {}
  },
  methods:{
    getDetail:function(id){
        var _this = this
         $.ajax({
            url:'/edu/user/findNews',
            method:'POST',
            data:{
                id:id
            },
            success:function(data){
                _this.detail = data.value
                _this.setNavName(data.value.type)
                _this.type = data.value.type
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
    this.id = GetQueryString('id')
    this.getDetail(this.id)
  }
})