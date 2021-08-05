<template>
  <div class="container">
    <div class="card card-body text-center p-5 mt-5 border-primary">
      <div>
        <i 
        class="fa fa-star text-warning fa-6x"
        @click="setRating(1)"
        ></i>
        <i 
        class="fa fa-star text-warning fa-6x"
        @click="setRating(2)"
        ></i>
        <i 
        class="fa fa-star text-warning fa-6x"
        @click="setRating(3)"
        ></i>
        <i 
        class="fa fa-star text-warning fa-6x"
        @click="setRating(4)"
        ></i>
        <i 
        class="fa fa-star text-warning fa-6x"
        @click="setRating(5)"
        ></i>
      </div>
      <h1 class="text-success mt-4"
      v-if="rating == 1"
      >Sorry to hear that rating</h1>
      <h1 class="text-success mt-4"
      v-if="rating == 2"
      >We got 2 star and we will improve!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      rating: null
    }
  },
  methods: {
    setRating(rating){
      this.rating = rating
    }
  }
}
</script>

<style >
body {
  background-color: #333;
}
</style>