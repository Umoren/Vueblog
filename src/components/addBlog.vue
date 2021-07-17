<template>
  <section>
    <aside>
      <sidebar> </sidebar>
    </aside>
    <div id="add-blog">
      <h2>Add a new blog post</h2>

      <form v-if="!submitted">
        <label> Blog Title</label>
        <input type="text" v-model.lazy="blog.title" required />
        <label for=""> Blog Content</label>
        <textarea v-model.lazy="blog.content"> </textarea>
      </form>
      <div v-if="submitted">
        <h3>Your post has been submitted</h3>
      </div>
      <label for="">
        Author:
        <select v-model="blog.author">
          <option v-for="author in authors" :key="author.id">
            {{ author }}
          </option>
        </select>
        <br />
        <button v-on:click.prevent="post">Add Blog</button>
      </label>

      <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title: {{ blog.title }}</p>
        <p>Blog content:</p>
        <p>{{ blog.content }}</p>
        <p>Author: {{ blog.author }}</p>
      </div>
    </div>
  </section>
</template>
<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  components: {
    sidebar: Sidebar
  },
  data () {
    return {
      blog: {
        title: '',
        content: '',
        author: ''
      },
      authors: ['Sammy', ' Samtech', 'Samblog'],
      submitted: false
    }
  },
  methods: {
    post: function () {
      this.$http
        .post('https://jsonplaceholder.typicode.com/posts', {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        })
        .then(function (data) {
          console.log(data)
          this.submitted = true
        })
    }
  }
}
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
  /* border: 1px solid black; */
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px solid #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

button {
  margin-top: 2rem;
  padding: 1rem;
  width: 10rem;
  border: none;
  background-color: skyblue;
  font-size: 1.2rem;
  color: white;
  border-radius: 10px;
}
</style>
