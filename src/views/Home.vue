<template>
  <div class="MainDiv" :style="{backgroundImage:'url(assets/Starter.jpg)'}">
    <v-container>
      <v-row class="text-center" >
        <v-col cols="12" class="Content">
          <div>
            <router-link to="Login"><LoginButton class="login"></LoginButton></router-link>
            <router-link to="Cadastro"><CadastroButton class="cadastro"></CadastroButton></router-link>
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
  .MainDiv {  
    background-size: cover;
    height: 716px;
  }
  .Content{
    display: flex;
    flex-direction: column;
  }
  .login{
    color: #FFF;
  }
  .cadastro {
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
