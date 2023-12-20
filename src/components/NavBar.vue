<template>
<v-app-bar md="8" sm="12" xs="12" app color="black" dark flat class="px-12">
  <v-btn><v-icon color="yellow">fas fa-signature</v-icon>Syed Abdullah</v-btn>
  <v-spacer></v-spacer>
  <v-btn  text @click="scroll('home')" class="text-yellow hidden-md-and-up">Home</v-btn>
  <v-btn text @click="scroll('about')" class="text-yellow hidden-md-and-up">About</v-btn>
  <v-btn text @click="scroll('portfolio')" class="text-yellow hidden-md-and-up">Portfolio</v-btn>
  <v-btn text @click="scroll('services')" class="text-yellow hidden-md-and-up">Services</v-btn>
  <v-btn text @click="scroll('biog')" class="text-yellow hidden-md-and-up">Biog</v-btn>
  <v-btn text @click="scroll('contact')" class="text-yellow hidden-md-and-up">Contact</v-btn>

  <!-- The following buttons will be visible only on small screens (sm and down) -->
  <v-btn text @click="scroll('home')" class="text-yellow hidden-sm-and-down">Home</v-btn>
  <v-btn text @click="scroll('about')" class="text-yellow hidden-sm-and-down">About</v-btn>
  <v-btn text @click="scroll('portfolio')" class="text-yellow hidden-sm-and-down">Portfolio</v-btn>
  <v-btn text @click="scroll('services')" class="text-yellow hidden-sm-and-down">Services</v-btn>
  <v-btn text @click="scroll('biog')" class="text-yellow hidden-sm-and-down">Biog</v-btn>
  <v-btn text @click="scroll('contact')" class="text-yellow hidden-sm-and-down">Contact</v-btn>
</v-app-bar>
</template>
<script>
export default {
methods:{scroll(refName){
  const element=document.getElementById(refName);
  element.scrollIntoView({behavior:"smooth"});
  }}
}

</script>

<style>


</style>