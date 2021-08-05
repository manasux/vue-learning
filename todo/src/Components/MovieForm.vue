<template>
  <form @submit.prevent="onSubmit" class="text-center">
    <input
      class="form-control mb-2"
      type="text"
      placeholder="Awesome movie name"
      name="name"
      v-model="name"
    />
     <input
      class="form-control mb-2"
      type="text"
      placeholder="Movie URL"
      name="url"
      v-model="url"
    />
    <button type="submit" class="btn btn-info btn-block">Add Movie</button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "Form",
  props: {
      addMovie: Function,
  },
  data() {
    return {
      name: "",
      url: "",
    };
  },
  methods: {
    onSubmit: function() {
      this.addMovie({
          name: this.name,
          url: this.url,
          id: uuidv4(),
          date: Date.now(),
      });
      this.name = "";
      this.url = "";
    },
  },
};
</script>

<style></style>
