<template>
<v-app id="home">
  <NavBar></NavBar>
<v-container fluid>  <div class="head">
 <v-row>
   <v-col xs="12" > <div  style="position: relative; background: brown" class="mt-15 responsive-text fill-width">
     <h1 class="text-grey">Hello,</h1>
     <h1 class="text-white">I'M Syed Abdullah</h1>
     <span class="text-grey">Website and Mobile App Developer</span><br />
     <v-btn tile dark class="text-yellow mt-8" variant="outlined" href="https://www.linkedin.com/in/syed-abdullah-software-engineer/" target="_blank">
       Contact me
     </v-btn>
   </div></v-col>
   <v-col cols="2">
     <div style="position: absolute; z-index: 9999;bottom: 0; margin-left: auto;margin-right: auto;left: 0;right: 0;text-align: center;">
       <v-icon>fas fa-angle-double-down</v-icon>
     </div>
   </v-col>
   <v-col md="5" xs="5">
     <div style="position: relative; background: coral; z-index: 9999; " class="mt-15">
       <v-avatar md="5" sm="2" xs="4" color="grey" size="300" class="hidden-sm-and-down">
         <v-img sm="2" class="d-flex" src="dp.jpg" cover></v-img></v-avatar>
     </div>
   </v-col>
 </v-row>
</div>
<MyAbout></MyAbout>
  <div class="text-center mt-4">
<h2>What are my Services?</h2>
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
                style="justify-content: center"
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
      <v-btn :color="computedAllBtnClr" class="mr-2" @click="selectAll()">All</v-btn>
      <v-btn  :color="computedWebBtnClr" class="mr-2" @click="selectWeb()">Website and design</v-btn>
      <v-btn :color="computedMobileBtnClr" class="mr-2" @click="selectMob()">Mobile Apps</v-btn>

    </div>
  </v-col>
  <v-col  cols="12" class="imgHover">
    <v-row v-if="selectedAll" class="fill-width" align=center justify="space-between">
    <template v-for="(item,i) in items" :key="i">
      <v-col   cols="12" sm="4">
        <v-hover  v-slot="{isHovering,props}"><v-card  @click="openDialog(item.img,item.desc)" :class="{'on-hover':isHovering}" v-bind="props">
<v-img :src="item.img"
        cover></v-img>
        </v-card></v-hover>
        <v-dialog v-model="dialog" max-width="60%" max-height="1000px">
          <v-card>
            <v-card   v-bind="props">
              <v-img :src="selectedImage"
                    ></v-img>
            </v-card>
            <v-card-title>{{projectDescription}}</v-card-title>

            <v-card-actions>
              <v-btn color="primary" @click="closeDialog">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>

    </template>
  </v-row >
    <v-row v-if="selectedWeb" class="fill-width" align=center justify="space-between">
    <template v-for="(webItem,i) in webItems" :key="i">
      <v-col   cols="12" sm="4">
        <v-hover  v-slot="{isHovering,props}"><v-card  @click="openDialog(webItem.img,webItem.desc)" :class="{'on-hover':isHovering}" v-bind="props">
<v-img :src="webItem.img"
        cover></v-img>
        </v-card></v-hover>
        <v-dialog v-model="dialog" max-width="60%" max-height="1000px">
          <v-card>
            <v-card   v-bind="props">
              <v-img :src="selectedImage"
                    ></v-img>
            </v-card>
            <v-card-title>{{projectDescription}}</v-card-title>

            <v-card-actions>
              <v-btn color="primary" @click="closeDialog">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>

    </template>
  </v-row >
    <v-row v-if="selectedMob" class="fill-width" align=center justify="space-between">
    <template v-for="(mobItem,i) in mobItems" :key="i">
      <v-col   cols="12" sm="4">
        <v-hover  v-slot="{isHovering,props}"><v-card  @click="openDialog(mobItem.img,mobItem.desc)" :class="{'on-hover':isHovering}" v-bind="props">
<v-img :src="mobItem.img"
        cover></v-img>
        </v-card></v-hover>
        <v-dialog v-model="dialog" max-width="60%" max-height="1000px">
          <v-card>
            <v-card   v-bind="props">
              <v-img :src="selectedImage"
                    ></v-img>
            </v-card>
            <v-card-title>{{projectDescription}}</v-card-title>

            <v-card-actions>
              <v-btn color="primary" @click="closeDialog">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>

    </template>
  </v-row >
  </v-col>


  <v-col style="padding-top: 30px" cols="12" id="biog">
    <div class="hire">
      <v-row>
        <v-col cols="12" sm="8">
          <h1 class="mt-9">Hire me for your awesome project</h1>
          <p class="text-black">
            Experienced software engineer with a passion for crafting efficient and scalable solutions. Eager to bring my technical prowess and dedication to excellence to a dynamic team ready to make a lasting impact in the world of technology.
          </p>
        </v-col>
        <v-col cols="12" sm="4">
          <v-btn   href="https://www.linkedin.com/in/syed-abdullah-software-engineer/" target="_blank" color="#FBDF7E" class="mt-15">Hire Me</v-btn>
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
import MyAbout from "@/components/MyAbout.vue";


export default defineComponent({
  name: 'HomeView',
  computed: {
    computedAllBtnClr() {
      return this.selectedAll ? '#FBDF7E' : 'grey';
    },
    computedWebBtnClr() {
      return this.selectedWeb? '#FBDF7E' : 'grey';
    },
    computedApiBtnClr() {
      return this.selectedApi? '#FBDF7E' : 'grey';
    },
    computedMobileBtnClr() {
      return this.selectedMob? '#FBDF7E' : 'grey';
    },
  },
  data(){return {  dialog: false,selectedImage: null, projectDescription:"",
    selectedAll:true,
    selectedWeb:false,
    selectedMob:false,
    selectedApi:false,
  }
  ;},
setup(){
    return{
      slider2:50,
      items: [
        {
          img: "web1.JPG",
          desc: "Employee Access Portal"
        },
        {
          img: "web2.JPG",
          desc: "Employee Access Portal"
        },
        {
          img: "web3.JPG",
          desc: "Employee Access Portal"
        },
          {
          img: "s1.jpg",
            desc: "SocialMedia App"
        },
        {
          img: "s2.jpg",
          desc: "SocialMedia App"
        },
        {
          img: "s7.JPG",
          desc: "SocialMedia App"
        },
        {
          img: "so1.jpeg",
          desc: "Sold App - Buying & Selling with SocialMedia Features"
        },
        {
          img: "so2.jpeg",
          desc: "Sold App - Buying & Selling with SocialMedia Features"
        },
        {
          img: "so3.jpeg",
          desc: "Sold App - Buying & Selling with SocialMedia Features"
        },
        ],
      webItems: [
        {
          img: "web1.JPG",
          desc: "Employee Access Portal"
        },
        {
          img: "web2.JPG",
          desc: "Employee Access Portal"
        },
        {
          img: "web3.JPG",
          desc: "Employee Access Portal"
        },
        {
          img: "web4.JPG",
          desc: "Employee Access Portal"
        },
        {
          img: "web5.JPG",
          desc: "Employee Access Portal"
        },
        {
          img: "web6.JPG",
          desc: "Employee Access Portal"
        },
      ],
      mobItems: [
        {
          img: "s1.jpg",
          desc: "SocialMedia App"
        },
        {
          img: "s2.jpg",
          desc: "SocialMedia App"
        },
        {
          img: "s7.JPG",
          desc: "SocialMedia App"
        },
        {
          img: "s3.jpg",
          desc: "SocialMedia App"
        },
        {
          img: "s4.jpg",
          desc: "SocialMedia App"
        },
        {
          img: "s5.jpg",
          desc: "SocialMedia App"
        },
        {
          img: "s6.jpg",
          desc: "SocialMedia App"
        },
        {
          img: "so1.jpeg",
          desc: "Sold App - Buying & Selling with SocialMedia Features"
        },
        {
          img: "so2.jpeg",
          desc: "Sold App - Buying & Selling with SocialMedia Features"
        },
        {
          img: "so3.jpeg",
          desc: "Sold App - Buying & Selling with SocialMedia Features"
        },
        {
          img: "so4.jpeg",
          desc: "Sold App - Buying & Selling with SocialMedia Features"
        },
        {
          img: "so5.jpeg",
          desc: "Sold App - Buying & Selling with SocialMedia Features"
        },
        {
          img: "so6.jpeg",
          desc: "Sold App - Buying & Selling with SocialMedia Features"
        },
      ],
    }
},
  components: {
    MyAbout,
    MyContact,

    NavBar,
  },
  methods :{
    openDialog(image,desc) {
      this.dialog = true;
      this.selectedImage=image;
      this.projectDescription=desc;
    },
    closeDialog() {
      this.selectedImage=null;
      this.dialog = false;
      this.projectDescription=null;
    },
    selectAll(){
      this.selectedWeb=false;
      this.selectedMob=false;
      this.selectedApi=false;
      this.selectedAll=true;
    }
    ,selectWeb(){
      this.selectedAll=false;
      this.selectedMob=false;
      this.selectedApi=false;
      this.selectedWeb=true;
    }
  ,selectMob(){
    this.selectedAll=false;
    this.selectedApi=false;
    this.selectedWeb=false;
      this.selectedMob=true;
  }
  ,selectApi(){
    this.selectedAll=false;
    this.selectedWeb=false;
    this.selectedMob=false;
      this.selectedApi=true;
  },

  }
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
.responsive-text {
  font-size: 1.2rem; /* Default font size for larger screens */
}

/* Responsive Typography Classes */
@include breakpoint(sm-and-down) {
  .responsive-text {
    font-size: 0.5rem; /* Adjust font size for small screens */
  }
}

@include breakpoint(xm-only) {
  .responsive-text {
    font-size: 0.3rem; /* Adjust font size for extra small screens */
  }
}
</style>
