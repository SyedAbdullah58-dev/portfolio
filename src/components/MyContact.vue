<script setup>

</script>

<template>
  <footer>
  <v-col >
    <div content="center" id="contact">
      <v-row >
        <v-col style="padding-top: 30px"><v-row>
          <v-col  align-self="center" align="center"><v-btn
              icon="fas fa-map-marker-alt"
              color="black"
              class="mt-20"
              variant="outlined"
          ></v-btn
          ><br />
            <span class="text-black" style="font-weight: bold">Rawalpindi, Pakistan</span
            ><br /></v-col>
          <v-col align-self="center" align="center">
            <v-btn
                icon="fas fa-phone-alt"
                color="black"
                class="mt-20"
                variant="outlined"
            ></v-btn
            ><br />
            <span class="text-black">+923341157461 </span> <br /></v-col>
          <v-col align-self="center" align="center">
            <v-btn
                icon="fas fa-envelope"
                color=""
                class="mt-20"
                variant="outlined"
            ></v-btn
            ><br />
            <span class="text-black">syedabdullah199758@gmail.com </span> <br /></v-col>

        </v-row></v-col>
      </v-row>
      <v-col cols="12">
        <v-row>  <v-container style="padding-top: 30px; padding-bottom: 20px">
          <v-row align="center" justify="center">
            <!-- Instagram Button -->
            <v-btn icon size="30" href="https://www.instagram.com/syed_abdullah_sh/"  target="_blank">
              <v-icon size="18">
                <i class="fab fa-instagram"></i>
              </v-icon>
            </v-btn>

            <!-- LinkedIn Button -->
            <v-btn icon size="30" href="https://www.linkedin.com/in/syed-abdullah-software-engineer/" target="_blank">
              <v-icon  color ="blue"  size="18">
                <i class="fab fa-linkedin"></i>
              </v-icon>
            </v-btn>

            <!-- GitHub Button -->
            <v-btn icon size="30" href="https://github.com/SyedAbdullah58-dev" target="_blank">
              <v-icon  color ="black" size="18">
                <i class="fab fa-github"></i>
              </v-icon>
            </v-btn>
          </v-row>
        </v-container></v-row>
      </v-col>
    </div>
  </v-col></footer>
</template>

<style scoped>
#contact{
border-radius: 30px;
  background-color: #edf0f5;
  margin-top: 20px;
  font-weight: bold;
}


</style>
