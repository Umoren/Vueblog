<template>
<section>
  <aside>
    <sidebar> </sidebar>
  </aside>
  <div v-theme:column="'wide'" id="show-blogs">

    <h1>All Blog Articles </h1>
    <div v-for='blog in blogs' class="single-blog">

      <h2 v-rainbow> {{blog.title}} </h2>
      <article> {{blog.body}} <hr> </article>
      <button v-on:click= "deletePost(blog.body, blog.id)"> Delete Post </button>

    </div>
  </div>
</section>
</template>

<script>

import axios from 'axios'
import Sidebar from '../components/Sidebar.vue';

export default {
  components: {
    'sidebar': Sidebar
  },
  data(){
    return {
      blogs: [],

    }
  },

    methods: {
     deletePost(arrayElement, id) {
       axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => this.blogs.splice(0, 1))

        // .then(response => console.log('post has been deleted', response));
        // window.location.reload();
     }
  },
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(data){
        // console.log(data)
        this.blogs = data.body.slice(0, 10);
        // console.log(this.blogs)
      })
    }

}
</script>

 <style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
   position: relative;
    left: 8rem;
  }

  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border-radius: 10px;
    border: 1px solid black;

  }

  section{
    background: #ddd;

  }

  h2{
    text-transform: uppercase;
  }

  article:first-letter{
    text-transform: capitalize;
  }

 button{
   margin-top: 1rem;
   padding: 1rem;
   width: 10rem;
   border: none;
   background-color: brown;
   font-size: 1rem;
   color: white;
   border-radius: 10px;
   cursor: pointer;

 }
 </style>
