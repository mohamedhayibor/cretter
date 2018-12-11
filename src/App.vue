<template>
  <div>
    <!--
      v-app component must be parent of All Vuetify components

      Hence is the root component of all app comps

      fluid: to extend to its full width

      Maybe later add footer, navigation bar
    -->
    <v-app>
      <v-content>
        <v-container fluid fill-height>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>