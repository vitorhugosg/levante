<template>
  <div class="MainDiv" :style="{backgroundImage:'url(assets/Starter.jpg)'}">
    <v-container>
      <v-row class="text-center" >
        <v-col cols="12" class="Content">
          <div>
            <router-link to="Login"><LoginButton class="login mt-5"></LoginButton></router-link>
            <router-link to="Cadastro"><CadastroButton class="mt-3 login"></CadastroButton></router-link>
          </div>
          <div>
          <Carrousel class="pb-5"></Carrousel>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
  .login{
    color: #FFF;
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
