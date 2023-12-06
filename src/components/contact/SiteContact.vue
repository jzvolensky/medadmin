<template>
  <div>
    <form @submit.prevent="submitForm">
      <!-- Your form fields go here -->
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" required />

      <!-- Other form fields... -->

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Send the form data to the backend
      axios
        .post("http://localhost:3000/submit-form", this.formData)
        .then((response) => {
          console.log(response.data);
          // Optionally, handle success on the frontend
        })
        .catch((error) => {
          console.error(error);
          // Optionally, handle errors on the frontend
        });
    },
  },
};
</script>

<style scoped>
/* ContactForm.vue-specific styles */

.contact-form {
  max-width: 400px;
  margin: auto;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #217dbb;
}
</style>
