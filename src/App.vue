<template>
  <v-container >
    <v-row class="text-center" >
      <v-col cols="12">
        <LoginButton></LoginButton>
        <CadastroButton></CadastroButton>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginButton from './components/LoginButton';
import CadastroButton from './components/CadastroButton';

export default {
  name: 'App',

  components: {
    LoginButton,
    CadastroButton,
  },

  data: () => ({
  }),
};
</script>
