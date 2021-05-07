const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "This book",
      author: "me",
      age: 26,
    };
  },
  methods: {
    changeTitle(newTitle) {
      return (this.title = newTitle);
    },
    toggleShowBooks() {
      return (this.showBooks = !this.showBooks);
    },
  },
});

app.mount("#app");
