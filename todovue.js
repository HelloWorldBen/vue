
var vm = new Vue ({
  el: "#app",
  methods: {
    addToList: function(){
      this.list.push(this.newItem);
      this.newItem ='';
    }
  },
  data:
  {
    title:"My to do list",
    newItem:'',
    list: [
      'Learn Vue',
      'Have Fun'
    ]
  }
})
