<script setup>

</script>

<template>
  <v-col cols="12" class="padd" id="portfolio">
    <div class="first" id="project">
      <v-row>
        <v-col cols="12">
          <div class="child">
            <v-btn
                icon="fas fa-laptop"
                color="#FBDF7E"
                class="text-white"
            ></v-btn>
            <h3 class="ml-3 mt-4">Web Development</h3>
            <div id="services">
              <p class="text-black ml-3 mt-4 text-caption">
                I specialize in web development, leveraging a powerful tech stack to deliver efficient solutions.
                Proficient in .NET Core for server-side development with SQL Server,
                Entity Framework, and Vue js for the frontend.
              </p></div>
          </div>
          <div class="child">
            <v-btn
                icon="fas fa-mobile-alt"
                color="#FBDF7E"
                class="text-white"
            ></v-btn>
            <h3 class="ml-3 mt-4">Mobile App Development</h3>
            <div id="services">
              <p class="text-black ml-3 mt-4 text-caption">
                I specialize in cross-platform mobile app development using Flutter,
                harnessing the power of a robust tech stack to deliver efficient solutions.
                Proficient in utilizing Flutter for the frontend and Firebase for backend services.
              </p></div>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
  </v-col>
</template>

<style scoped>
.first {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}
</style>