<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    document.title="Syed Abdullah"
  },
  data: () => ({
    //
  }),
}
</script>
