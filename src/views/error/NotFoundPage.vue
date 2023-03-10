<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt=""
          />
        </div>
        <div class="col-sm-6">
          <h1 class="">404</h1>
        
          <h1>The page you are looking for not avaible!</h1>

          <router-link class="text-decoration-none" to="/"><v-btn color="primary">Go to Home </v-btn></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "notFoundPage",
};
</script>
<style>
.bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
}
</style>
