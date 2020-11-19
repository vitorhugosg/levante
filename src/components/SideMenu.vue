<template>
  <div class="d-flex col-12 justify-content-between bg-danger">
    <b-button v-b-toggle.sidebar-1><b-icon icon="glyphicon-align-left"></b-icon></b-button>
    <h1 class="text-white">Profile</h1>
    <b-icon></b-icon>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>