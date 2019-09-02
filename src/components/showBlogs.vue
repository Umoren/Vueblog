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
      <button v-on:click= "deleted"> Delete Post </button>
    </div>
  </div>
</section>
</template>

<script>

import Sidebar from '../components/Sidebar.vue';

export default {
  components: {
    'sidebar': Sidebar
  },
  data(){
    return {
      blogs: []
    }
  },

    methods: {
      deleted: () => {
      this.$http.delete('https://jsonplaceholder.typicode.com/posts', id)
      .then(function(data){
        console.log(data);
      })
    },
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
 </style>
