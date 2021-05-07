const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "This book",
      author: "me",
      age: 26,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(newTitle) {
      return (this.title = newTitle);
    },
    toggleShowBooks() {
      return (this.showBooks = !this.showBooks);
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
