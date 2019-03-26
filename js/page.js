
var app = new Vue({
  el: '#app',
  data: {
    list:{
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
    }
  },
  methods:{
    getList:function(type){
        var _this = this
         $.ajax({
            url:'/medu/user/findMNewsByPage',
            method:'POST',
            data:{
                limit:3,
                type:type
            },
            success:function(data){
                _this.list['list'+type] = data.value
            }
        })
    }
  },
  created(){
    this.getList(1)
    this.getList(2)
    this.getList(3)
    this.getList(4)
    this.getList(5)
    this.getList(6)
  }
})