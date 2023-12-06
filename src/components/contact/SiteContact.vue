<template>
  <div>
    <form class="contact-form" @submit.prevent="submitForm">
      <h2>Kontaktný formulár</h2>
      <label for="name">Meno:</label>
      <input type="text" id="name" v-model="formData.name" required />

      <label for="surname">Priezvisko:</label>
      <input type="text" id="surname" v-model="formData.surname" required />
      
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />

      <label for="company">Firma:</label>
      <input type="text" id="company" v-model="formData.company" required />

      <label for="phone">Telefón:</label>
      <input type="text" id="phone" v-model="formData.phone" required />

      <label for="message">Správa:</label>
      <textarea id="message" v-model="formData.message" rows="5" required></textarea>
      
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
        surname: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      },
      formErrors: {
        name: false,
        surname: false,
        email: false,
        company: false,
        phone: false,
        message: false,
      },
    };
  },
  methods: {
    submitForm() {
      if (!this.validateForm()) {
        return; 
      }

      this.resetFormErrors();

      axios
        .post("http://localhost:3000/submit-form", this.formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    validateForm() {
      let isValid = true;
      for (const field in this.formData) {
        if (!this.formData[field]) {
          this.formErrors[field] = true;
          isValid = false;
        }
      }
      return isValid;
    },
    validateField(fieldName) {
      if (!this.formData[fieldName]) {
        this.formErrors[fieldName] = true;
      } else {
        this.formErrors[fieldName] = false;
      }
    },
    resetFormErrors() {
      for (const field in this.formErrors) {
        this.formErrors[field] = false;
      }
    },
  },
};
</script>

<style scoped>

.contact-form {
  max-width: 400px;
  margin: auto;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input,
textarea {
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
  margin-top: 10px; 
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #217dbb;
}
</style>