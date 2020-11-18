<template>
  <div class="Login">
    <v-container >
      <v-row class="text-center" >
        <v-col cols="12">
          <h1>Login</h1>
          <div>
            <MainInput placeholder="Email"></MainInput>
            <MainInput placeholder="Senha"></MainInput>
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
  name: 'Login',
  components: {
    MainInput,
    SendButton
  }
}
</script>
