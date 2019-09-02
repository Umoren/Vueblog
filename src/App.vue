<template>
<section>
   
  <div >

    <!-- <add-blog> </add-blog> -->
    <!-- <show-blog> </show-blog> -->
    <router-view> </router-view>
  </div>
</section>
</template>


<script>

import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components:{
    'add-blog': addBlog,
    'show-blog': showBlogs,
    'sidebar': Sidebar
  },

  data(){
    return{

    }
  },
  methods: {

  }
}
</script>

<style>
  body{
    margin: 0;
    font-family: 'helvetica';
  }
</style>
