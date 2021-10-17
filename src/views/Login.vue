<template>
  <div>
    <h1>Login</h1>
    <br />
    <b-container>
      <form @submit.prevent="submitForm">
        <label for="email">Correo Electrónico</label> <br />
        <input
          type="email"
          id="email"
          name="email"
          value="Ingresa tu correo"
          required
          v-model="email"
        />
        <br />
        <small secondary>
          <i>Ejercicio: Ingresa con el correo: pablo@gmail.com</i></small
        >
        <br />
        <br />

        <label for="pass">Contraseña:</label><br />
        <input
          type="password"
          id="pass"
          name="pass"
          value="Ingresa tu contraseña"
          required
          v-model="password"
        /><br />
        <small secondary>
          <i>Ejercicio: Ingresa con la contraseña: 123456</i></small
        >

        <br />
        <br />
        <hr />

        <input type="submit" value="Ingresar" />
      </form>
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
    submitForm() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        //   condicionales de la promesa
        .then((response) => {
          // console.log(response.user.email);
          // llamar a la accion de la store
          this.$store.dispatch("defineCurrentUser", {
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
