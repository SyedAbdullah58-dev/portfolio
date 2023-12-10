<script setup>

</script>

<template>
  <v-col cols="12" class="mt-16" id="about">
    <div><v-row>
      <v-col cols="12" sm="6"><div>  <v-img class="egg" src="im1.jpeg" max-height="300"  contain cover ></v-img></div></v-col>
      <v-col cols="12" sm="6">
        <h5 class="mt-16">About Me</h5>
        <div style="width: 120px">
          <v-slider
              v-model="slider2"
              color="yellow"

          ></v-slider>
        </div>
        <h4 class="mt-n4">I am a Software Engineer</h4>
        <h4 class="">Turning your Idea into reality</h4>
        <p class="text-grey">
          Passionate software engineer with a knack for building cutting-edge applications using the latest technologies. With expertise in<span style="font-weight: bold"> C#, Dart, Flutter, .NET Core, Vue.js ,and SQL Server</span>, I bring a wealth of knowledge to every project I undertake. Whether it's developing robust backend systems or creating engaging user interfaces, I'm always up for a challenge.
        </p>
        <br />
        <p class="text-grey">
          I take pride in writing clean, efficient code that delivers the best possible performance. My ability to learn quickly and adapt to new technologies has enabled me to stay ahead of the curve in a constantly evolving industry.

          As a skilled problem-solver and team player, I thrive in collaborative environments and enjoy working with cross-functional teams to deliver exceptional results. With a track record of delivering high-quality work on time and on budget, I'm confident in my ability to meet and exceed your expectations.

          Let's connect to discuss how my skills and expertise can help drive your organization's success.
        </p>
        <v-btn tile dark color="yellow" class="mt-4" href="https://drive.google.com/file/d/1Q7EEIGyUekuIxs4aEiiWAepjJz_zPyzA/view?usp=sharing" target="_blank">
          Download Resume
        </v-btn>
      </v-col>
    </v-row></div>
  </v-col>
</template>

<script>

</script>
<style scoped>
.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: black;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
</style>