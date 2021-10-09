<template>
  <div>
    <h1>Login</h1>
    <br />
    <b-container>
      <img alt="Vue logo" src="../assets/logo.png" />
      <b-form @submit.prevent="pepitoDoble">
        <!-- email -->
        <b-form-group label="Correo electrónico:" label-for="email">
          <b-form-input
            id="email"
            type="email"
            placeholder="Ejercicio: Ingresa con pablo@gmail.com"
            required
            v-model="email"
          ></b-form-input>
        </b-form-group>
        <br />
        <!-- password -->
        <b-form-group label="Contraseña:" label-for="password">
          <b-form-input
            id="password"
            type="password"
            placeholder="Ejercicio: Ingresa con 123456"
            required
            v-model="password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Ingresar</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    pepitoDoble() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        //   condicionales de la promesa
        .then((response) => {
          // console.log(response.user.email);
          // llamar a la accion de la store
          this.$store.dispatch("definirUsuarioActual", {
            email: response.user.email,
          });
          this.$router.push("/about");
        })
        .catch((error) => {
          console.error(error);
        });
      //   console.log(this.email, this.password);
    },
  },
};
</script>

<style></style>
