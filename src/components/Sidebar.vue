<template>

  <div id="sidebar-wrapper">
    <div class="sidebar">
      <div id="sidebar-content">
        <div class="sidebar-image">
          <img alt="user avatar" class="avatar"  src="../assets/sammy.jpg">
          <h1 class="userName"> {{user}} </h1>
        </div>

        <div class="otherText">
          <ul class="otherPosts">
            <li><router-link to="/add" title="create blog post"> Create Blog Posts </router-link></li>
            <li><router-link to="/"> View all Posts </router-link></li>
          </ul>
          <router-view/>
        </div>
     </div>
   </div>
  </div>
</template>

<script>



export default {
  data(){
    return{
      user: 'Umoren Samuel'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url(https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
  @import url('https://fonts.googleapis.com/css?family=Manjari|Montserrat&display=swap');
  #sidebar-content{
    position: relative;
    left: 2rem;
  }
 .sidebar{
     /* border: 4px solid black; */
    padding: 15px;
    background-color:lightgreen;
    width: 20%;
    height: 100vh;
    bottom: 14rem;
    position: relative;
    top: 0;
    left: 0;
    padding-top: 20px;
    position: fixed;
    /* z-index: 4; */
  }

  .userName{
    position: relative;
    z-index: 1;
    bottom: 0rem;
    left: 0rem;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-weight: 400;
  }

  .avatar{
    position: relative;
    z-index: 1;
    width: 10rem;
    border: 3px solid white;
    border-radius: 10%;
    top: 0rem;
    left: 0rem;
    height: 15rem;
    background-size: cover;

    /* bottom: 6rem; */
      }

  ul.otherPosts{
    list-style-type: none;
    position: relative;
    margin-left: -2rem;
    /* left: -20px; */
    /* padding: 2rem; */
  }

  a{
    text-decoration: none;
    position: relative;
    top: 0rem;
    font-family: 'Montserrat', sans-serif;
    color: #ffffff
  }

  li{
    margin-top: 2rem;
    /* padding: 1rem; */
    }

</style>
