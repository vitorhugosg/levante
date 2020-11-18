<template>
  <div>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
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