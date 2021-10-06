<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="book.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="editorial">Editorial</label>
        <input
          type="text"
          class="form-control"
          id="editorial"
          required
          v-model="book.editorial"
          name="editorial"
        />
      </div>

      <div class="form-group">
        <label for="author">Author</label>
        <input
          type="text"
          class="form-control"
          id="author"
          required
          v-model="book.author"
          name="author"
        />
      </div>

      <div class="form-group">
        <label for="published">Published Year</label>
        <input
          type="text"
          class="form-control"
          id="published"
          required
          v-model="book.published"
          name="published"
        />
      </div>

      <button @click="saveBook" class="btn btn-success">Create</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newBook">Add</button>
    </div>
  </div>
</template>

<script>
import BooksDataService from "../services/BooksDataServices";

export default {
  name: "add-book",
  data() {
    return {
      book: {
        id: null,
        title: "",
        editorial: "",
        author: "",
        published: ""
      },
      submitted: false
    };
  },
  methods: {
    saveBook() {
      var data = {
        title: this.book.title,
        editorial: this.book.editorial,
        author: this.book.author,
        published: this.book.published
      };

      BooksDataService.create(data)
        .then(response => {
          this.book.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newBook() {
      this.submitted = false;
      this.book = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
