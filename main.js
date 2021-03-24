var app = new Vue({
  el: '#root',
  data: {
    index: 0,
    immagini: [
      "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
      "immagine-sost.webp",
      "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
    ]
  },
  methods: {
    next: function (){
      if (this.index < this.immagini.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    },
    prev: function (){
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.immagini.length - 1;
      }
    },
    dots: function(index) {
      this.index = index;
    }
  }
});
