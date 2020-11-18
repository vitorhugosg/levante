
<template>
  <div class="Cadastro">
    <v-container >
      <v-row class="text-center" >
        <v-col cols="12">
          <h1>Cadastro</h1>
          <div>
            <MainInput placeholder="Email"></MainInput>
            <MainInput placeholder="Nome Completo"></MainInput>
            <MainInput placeholder="Senha"></MainInput>
            <MainInput placeholder="Confirme sua senha"></MainInput>
          </div>
          <SendButton></SendButton>
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
