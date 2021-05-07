const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: "book one",
          author: "author one",
          img: "images/b1.png",
          isFav: true,
        },
        {
          title: "book two",
          author: "author two",
          img: "images/b2.png",
          isFav: false,
        },
        {
          title: "book three",
          author: "author three",
          img: "images/b3.png",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    changeTitle(newTitle) {
      return (this.title = newTitle);
    },
    toggleShowBooks() {
      return (this.showBooks = !this.showBooks);
    },
    toggleFavBook(book) {
      return (book.isFav = !book.isFav);
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
