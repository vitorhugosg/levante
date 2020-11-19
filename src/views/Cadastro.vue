<template>
  <div class="MainDiv" :style="{backgroundImage:'url(assets/fundo-login.jpg)'}">
    <v-container >
      <v-row class="text-center" >
        <v-col cols="12 d-flex flex-column justify-content-around Content">
            <h1 class="mb-5 text-white">Cadastro</h1>
          <div>
            <MainInput placeholder="Email" class="mb-3"></MainInput>
            <MainInput placeholder="Nome Completo" class="mb-3"></MainInput>
            <MainInput placeholder="Senha " class="mb-3"></MainInput>
            <MainInput placeholder="Confirme sua senha" class="mb-3"></MainInput>
          <SendButton></SendButton>
          </div>
      </v-col>
     </v-row>
    </v-container >
  </div>
</template>

<script>
import MainInput from '../components/MainInput'
import SendButton from '../components/SendButton'

export default {
  name: 'Cadastro',
  components: {
    MainInput,
    SendButton
  }
}
</script>
