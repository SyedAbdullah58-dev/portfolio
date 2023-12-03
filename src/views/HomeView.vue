<template>
<v-app id="home">
  <NavBar></NavBar>
<v-container fluid>  <div class="head">
 <v-row>
   <v-col cols="5"> <div style="position: relative" class="mt-15">
     <h1 class="text-grey">Hello,</h1>
     <h1 class="text-white">I'M Syed Abdullah</h1>
     <span class="text-grey">Website and Mobile App Developer</span><br />
     <v-btn tile dark class="text-yellow mt-8" variant="outlined">
       Contact me
     </v-btn>
   </div></v-col>
   <v-col cols="2">
     <div style="position: absolute; z-index: 9999;bottom: 0; margin-left: auto;margin-right: auto;left: 0;right: 0;text-align: center;">
       <v-icon>fas fa-angle-double-down</v-icon>
     </div>
   </v-col>
   <v-col cols="5">
     <div style="position: relative; z-index: 9999" class="mt-16">
       <v-avatar  class="profile avatar-shadow" color="grey" size="300">
         <v-img  src="web3.jpg" ></v-img></v-avatar>
     </div>
   </v-col>
 </v-row>
</div>
<v-col cols="12" class="mt-16" id="about">
  <div><v-row>
    <v-col cols="12" sm="6"><div>  <v-img class="egg" src="im1.jpeg" contain max-height="300"></v-img></div></v-col>
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
        Passionate software engineer with a knack for building cutting-edge applications using the latest technologies. With expertise in<span style="font-weight: bold"> C#, Dart, Flutter,.NET Core , and SQL Server</span>, I bring a wealth of knowledge to every project I undertake. Whether it's developing robust backend systems or creating engaging user interfaces, I'm always up for a challenge.
      </p>
      <br />
      <p class="text-grey">
        I take pride in writing clean, efficient code that delivers the best possible performance. My ability to learn quickly and adapt to new technologies has enabled me to stay ahead of the curve in a constantly evolving industry.

        As a skilled problem-solver and team player, I thrive in collaborative environments and enjoy working with cross-functional teams to deliver exceptional results. With a track record of delivering high-quality work on time and on budget, I'm confident in my ability to meet and exceed your expectations.

        Let's connect to discuss how my skills and expertise can help drive your organization's success.
      </p>
      <v-btn tile dark color="yellow" class="mt-4">
        Download Resume
      </v-btn>
    </v-col>
  </v-row></div>
</v-col>
  <div class="text-center mt-4">
<h2>What are my Service?</h2>
    <div style="width: 120px; margin: 0 auto">
      <v-slider
          v-model="slider2"
          color="yellow"
      ></v-slider>
    </div>
  </div>

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
  <v-col cols="12" sm="12" id="myservices">
    <div class="d-flex justify-center mb-6">
      <v-btn color="#FBDF7E" class="mr-2">All</v-btn>
      <v-btn class="mr-2" variant="tonal">Website and design</v-btn>
      <v-btn class="mr-2" variant="tonal">Mobile Apps</v-btn>
      <v-btn class="mr-2" variant="tonal">APIs</v-btn>
    </div>
  </v-col>
  <v-col cols="12" class="imgHover">  <v-row class="fill-width" align=center justify="space-between">
    <template v-for="(item,i) in items" :key="i">
      <v-col cols="12" sm="4">
        <v-hover  v-slot="{isHovering,props}"><v-card  :class="{'on-hover':isHovering}" v-bind="props">
<v-img :src="item.img"
        cover></v-img>
        </v-card></v-hover>
      </v-col>
    </template>
  </v-row >
  </v-col>

  <v-col cols="12" sm="12">
    <div class="d-flex justify-center mb-6">
      <v-btn color="#FBDF7E" class="mt-4">Load More</v-btn>
    </div>
  </v-col>
  <v-divider></v-divider>
  <v-col cols="12" id="biog">
    <div class="hire">
      <v-row>
        <v-col cols="12" sm="8">
          <h1 class="mt-9">Hire me for your awesome project</h1>
          <p class="text-grey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            itaque, eaque molestiae deleniti, earum voluptate eos id dicta
            at, blanditiis
          </p>
        </v-col>
        <v-col cols="12" sm="4">
          <v-btn color="#FBDF7E" class="mt-15">Hire Me</v-btn>
        </v-col>
      </v-row>
    </div>
  </v-col>
<MyContact></MyContact>

</v-container>
</v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components

import NavBar from "@/components/NavBar.vue";

import MyContact from "@/components/MyContact.vue";

export default defineComponent({
  name: 'HomeView',
setup(){
    return{
      slider2:50,
      items: [
        {
          img: "web1.jpg",
        },
        {
          img: "web2.jpg",
        },
        {
          img: "web3.jpg",
        },
          {
          img: "s1.jpg",
        },
        {
          img: "s2.jpg",
        },
        {
          img: "s6.jpg",
        },
        {
          img: "so1.jpeg",
        },
        {
          img: "so2.jpeg",
        },
        {
          img: "so3.jpeg",
        },
        ]
    }

},
  components: {
    MyContact,

    NavBar,
  },
});
</script>
<style scoped>
.v-container {
  padding: 16px 0 16px 0;
}

.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}
.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}
.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: black;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
.profileimg{
  margin-left: 150px;
  margin-top: 50px;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  /* Adjust the width and height to your preference */
   /* Should be the same as the width for a perfect circle */
  /* Ensures the image covers the entire circle */
  border: 2px solid #fff;
  background: aqua;
  object-fit: initial;

}
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
.imgHover {
  padding: 0 200px;
}
.pre {
  width: 100%;
  height: 380px;
  text-align: center;
  padding: 0 200px;
  background-color: #f5f5f5;
}
.hire {
  width: 110%;
  height: 200px;
  padding: 0 200px;
  background-color: #e9e9e9;
  margin-top: 20px;
}
#services{
width: 300px;
}
</style>
