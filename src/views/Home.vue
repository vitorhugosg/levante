<template>
  <div :style="{backgroundColor:'#000'}">
    <v-container >
      <v-row class="text-center" >
        <v-col cols="12">
          <div>
            <router-link to="Login"><LoginButton class="login"></LoginButton></router-link>
          
          <CadastroButton class="cadastro"></CadastroButton>
          </div>
          <div>
          <Carrousel></Carrousel>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
  .cadastro {
    margin-top: 10px;
  }
  .background {
    background-image: url('/src/assets/Starter.jpg');
    background-size: cover;
  }
</style>

<script>
import LoginButton from '../components/LoginButton';
import CadastroButton from '../components/CadastroButton';
import Carrousel from '../components/Carrousel'

export default {
  name: 'Home',

  components: {
    LoginButton,
    CadastroButton,
    Carrousel
  },
};
</script>
