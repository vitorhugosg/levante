<template>
  <div>
  <b-navbar toggleable="sm" type="light" variant="light">
    <SideMenu></SideMenu>
  </b-navbar>
 </div>
</template>

<script>
import SideMenu from '../components/SideMenu'

export default {
  name: 'Navbar',
  components: {
    SideMenu
  }
}
</script>