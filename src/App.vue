<template>
 <div class="container">
   <header class="sticky">
     <div class="logo_item">
       <h1>
         <img :src="Logo" alt="">
         <span>{{$t('logo')}}</span>
       </h1>
     </div>

     <div class="list_items">
       <ul id="ulItem" class="ul_item">
         <li><a href="#about">{{$t('ulItems.about')}}</a></li>
         <li><a href="#service">{{$t('ulItems.service')}}</a></li>
         <li><a href="#faq">{{$t('ulItems.faq')}}</a></li>
         <li><a href="#contact">{{$t('ulItems.contact')}}</a></li>
       </ul>
       <button @click="switchLang" class="languageItem">
         {{$t('switchLang')}}
       </button>
       <div @click="clickItems()" id="menu"  class="menu_item">
       </div>
       <div class="close_icon" @click="closeContent()" id="closeIcon" >
       </div>
       <button id="btn_item" class="btn_item" type="button"><a href="#contact">{{$t('button')}}</a> </button>
     </div>
   </header>
   <div class="content">
     <div class="card">
       <div class="card_item"
            data-aos="fade-right"
       >
         <div class="card_items">
           <div  class="card_lorem">
             <h1>{{$t('cardTitle')}}</h1>
             <span>{{$t('cardText')}}</span>
           </div>
           <div class="imageItem">
             <img style="width: 30%;" class="image" :src="image1" alt="">
             <img style="width: 60%" class="circle" :src="circle" alt="">
             <img style="width: 240px" :src="image" alt="">
           </div>
         </div>
         <div class="btn_items">
           <button class="btn_item"><a href="#contact">{{$t('button')}}</a> </button>
           <img :src="frame" alt="">
         </div>
       </div>
       <div data-aos="fade-left"
           class="right_image" style="width: 100%">
         <img class="btn_image" :src="logo" alt="">
       </div>
     </div>
     <div id="about" class="about">
       <h1>{{$t('about.title')}}</h1>
       <div class="frames">
         <div class="frame" data-aos="flip-down">
           <img :src="mask" alt="">
           <h2>{{$t("about.title2")}}</h2>
           <span>{{$t('about.text')}}</span>
         </div>
         <div class="frame" data-aos="flip-down">
           <img :src="mask1" alt="">
           <h2>{{$t('about.title')}}</h2>
           <span>{{$t('about.text')}}</span>
         </div>
         <div class="frame" data-aos="flip-down">
           <img :src="mask2" alt="">
           <h2>{{$t('about.title')}}</h2>
           <span>{{$t('about.text')}}</span>
         </div>
       </div>
       <div class="card_image">
         <div class="image_info" data-aos="flip-right">
           <div class="info_item"
           >
             <p>{{$t('about.info')}}</p>
             <span>{{$t('about.text')}}</span>
           </div>
           <button class="btn_item"><a href="#contact">{{$t('button')}}</a> </button>
         </div>
       </div>
     </div>
     <section>
       <div id="service" class="title_Items" data-aos="fade-up-right">
         <h2>{{$t('service.title')}}</h2>
       </div>
       <div class="section_items">
         <div class="section_item" data-aos="flip-right">
           <div class="section_card">
             <h2>{{$t('service.title1')}}</h2>
             <p>{{$t('service.text')}}</p>
           </div>
           <img :src="klop" alt="">
         </div>
         <div class="section_item" data-aos="flip-right">
           <div class="section_card">
             <h2>{{$t('service.title2')}}</h2>
             <p>{{$t('service.text2')}}</p>
           </div>
           <img :src="cockroach" alt="">
         </div>
         <div class="section_item" data-aos="flip-right">
           <div class="section_card">
             <h2>{{$t('service.title3')}}</h2>
             <p>{{$t('service.text3')}}</p>
           </div>
           <img :src="scorpion" alt="">
         </div>
       </div>
       <div class="section_image_items">
         <div class="section_image"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
           <img :src="peopleCard" alt="">
         </div>
         <div class="section_card_right"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
         >
           <div class="right_items">
             <img :src="icons" alt="">
             <p>{{$t('service.sectionText')}}</p>
           </div>
           <button class="btn_item"><a href="#contact">{{$t('button')}}</a> </button>
         </div>
       </div>
     </section>
     <div id="faq" class="card_faq">
       <h2>{{$t('faq.title')}}</h2>
       <div class="faq_right">
         <div id="accordion" class="accordion-container">
           <div style="border-bottom: 1px solid #ccc; color: #676D83; font-size: 22px"
               v-for="(item, index) in items"
               :key="index"
               :class="[
                'accordion',
                { 'is-open': isOpen.includes(index) }
                ]"
             >
             <div class="accordion-header" @click="toggleAccordion(index)"
                  data-aos="flip-down"
             >
               <p style="font-size: 35px">{{item.title}} </p>
               <img width="35px" height="35px" v-if="!isOpen.includes(index)" :src="chevron" alt="">
               <img width="30px" height="30px" v-else :src="upIcon" alt="">
             </div>
             <div class="accordion-body"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
             >
               <div class="accordion-content">
                 {{item.text}}
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div id="contact" class="cardItems">
       <div class="cardLeft" data-aos="zoom-in-right">
         <h2>{{$t("contact.title")}}</h2>
         <input id="name" type="text" v-model="name" name="name" :placeholder="$t('contact.placeholder.name')">
         <input id="number" type="number" v-model="phone" name="number" :placeholder="$t('contact.placeholder.phoneNumber')">
         <button @click="clickButton" class="btn_save">{{$t('contact.button')}}</button>
       </div>
       <div class="cardRight"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
         <p>{{$t('contact.text')}}</p>
         <img :src="person" alt="person">
       </div>
     </div>
     <footer>
       <div class="footerTitle">
         <img :src="Logo" alt="">
         {{$t('footer.logo')}}
       </div>
       <div class="footer_right">
         <a href="#"><img  id="location" :src="location" alt="">{{$t('footer.location')}}</a>
         <label><img :src="phone" alt="">{{$t('footer.number')}}</label>
         <p></p>
       </div>
     </footer>
   </div>
 </div>

</template>


<script setup>
import logo from '@/assets/logo.png'
import image from '@/assets/image.png'
import image1 from '@/assets/image1.png'
import circle from '@/assets/circle.png'
import frame from '@/assets/Frame.png'
import mask from '@/assets/Mask.png'
import mask1 from '@/assets/mask1.png'
import mask2 from '@/assets/Mask2.png'
import cockroach from '@/assets/tarakan.jpg'
import scorpion from '@/assets/chayon.jpg'
import peopleCard from '@/assets/people.png'
import icons from '@/assets/icons.png'
import chevron from '@/assets/chevron.jpg'
import person from '@/assets/person.png'
import Logo from '@/assets/Logo.jpg'
import location from '@/assets/location.png'
import phone from '@/assets/phone.png'
import klop from '@/assets/klop.jpg'
import upIcon from '@/assets/upIcon.jpg'

import  { useI18n } from "vue-i18n"
const { t, locale } =useI18n({useScope: "global"})

const switchLang = ()=> {
  locale.value === 'en' ? locale.value = 'uz' : locale.value = 'en'
}
</script>

<script>
import { onMounted } from "@vue/runtime-core";
import AOS from "aos";

let u_name = document.getElementById("name")
let u_number = document.getElementById("number")

let telegram_bot_id = "token";
let chat_id = 1111

let coll = document.getElementsByClassName("faq_item")
let i;
for (i=0; i<coll.length; i++){
  coll[i].addEventListener("click", function (){
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if(content.style.display === "block"){
      content.style.display = "none";
    } else {
      content.style.display = "block"
      console.log(content)
    }
  })
}
export default {
  name: "App",
  setup() {
    onMounted(() => {
      AOS.init = function () {
          return undefined;
      };
      AOS.init();
    });
  },
  data(){
    return{
      activeName:'',
      toggleBtn: false,
      name: "",
      phone: "",
      items: [
        {
          title: this.$t('faq.titles.title'),
          text: this.$t("faq.titles.text"),
        },
        {
          title: this.$t("faq.titles.title1"),
          text: this.$t("faq.titles.text1"),
        },
        {
          title: this.$t("faq.titles.title2"),
          text: this.$t("faq.titles.text2"),
        }
      ],
      isOpen: []
    }
  },
  methods:{
    clickButton(){

    },
    toggleAccordion(index) {
      if (this.isOpen.includes(index)) {
        this.isOpen = this.isOpen.filter(i => i !== index);
        return;
      }

      this.isOpen.push(index);
    },
    clickItems(){
      let ulItem =document.getElementById('ulItem')
      let menu = document.getElementById("menu")
      let closeIcon = document.getElementById('closeIcon')

      menu.classList.remove('menu_item')
      ulItem.classList.add("active")
      closeIcon.classList.add("activeClose")
    },
    closeContent(){
      let ulItem =document.getElementById('ulItem')
      let menu = document.getElementById("menu")
      let closeIcon = document.getElementById('activeClose')

      menu.classList.add('menu_item')
      ulItem.classList.remove("active")
      closeIcon.classList.remove("activeClose")
    }
  },
  init() {

  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
body{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: sans-serif;
}
.container{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .sticky{
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: white;
    height: 150px;
    display: flex;
    padding: 20px 50px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    font-weight: bold;
    font-size: 20px;
    font-family: sans-serif;
    .container{
      display: flex;
      width: 1300px;
    }
    .logo_item{
      display: flex;
      width: 500px;
      h1{
        display: flex;
        align-items: center;
        gap: 10px;
        color: indigo;
        font-weight: bold;
        font-size: 50px;
        img{
          display: flex;
          height: 50px;
          width: 50px;
        }
        span{
          font-size: 50px;
          font-weight: bold;
        }
      }
    }
    .menu_item{
      display: none;
      width: 45px;
      height: 45px;
    }
    .menu_item:hover{
      cursor: pointer;
    }
    .list_items{
      display: flex;
      justify-content: space-between;
      width: 800px;
      height: 50px;
      align-items: center;
      .ul_item{
        width: 400px;
        display: flex;
        align-items: center;
        list-style-type: none;
        justify-content: space-between;
        li{
          display: flex;
          justify-content: center;
          height: 100%;
          a{
            color: blue;
            text-align: center;
          }
          a:hover{
            background: none;
          }
        }
      }
      .languageItem{
        display: flex;
        width: 100px;
        height: 45px;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 20px;
        color: white;
        background-color: darkgray;
        border-radius: 8px;
        border: 1px solid;
      }
      .languageItem:hover{
        cursor: pointer;
      }
      .btn_item{
        display: flex;
        width: 150px;
        height: 60px;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        background-color: indigo;
        border: 2px solid indigo;
        font-size: 20px;
        font-weight: bold;
        a{
          color: white;
        }
        a:hover{
          background: none;
        }
      }
      .btn_item:hover{
        cursor: pointer;
        background-color: white;
        color: indigo;
        a{
          color: indigo;
        }
      }
    }
  }
  .content{
    display: flex;
    width: 95%;
    height: 100%;
    margin: 0 auto;
    flex-direction: column;
    .card{
      display: flex;
      justify-content: space-between;
      .card_item{
        width: 100%;
        gap: 50px;
        .card_items{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .card_lorem{
            display: flex;
            padding-top: 40px;
            flex-direction: column;
            width: 580px;
            height: 500px;
            gap: 40px;
            h1{
              font-size: 100px;
              font-weight: bold;
              line-height: 90px;
            }
            span{
              font-size: 28px;
              width: 85%;
              color: #056ac7;
            }
          }
          .imageItem{
            display: flex;
            width: 250px;
            justify-content: center;
            align-items: center;
            position: relative;
            .image{
              position: absolute;
              right: 270px;
              top: 25px;
              z-index: -1;
            }
            .circle{
              position: absolute;
              z-index: -1;
              right: 180px;
              top: 40px;
            }
            img{
              position: relative;
              z-index: -1;
            }
          }
        }
        .btn_items{
          display: flex;
          gap: 15px;
          .btn_item{
            width: 160px;
            height: 50px;
            border-radius: 20px;
            background-color: indigo;
            border: 2px solid indigo;
            font-size: 20px;
            font-weight: bold;
            color: white;
            a{
              color: white;
            }
            a:hover{
              background: none;
            }
          }
          .btn_item:hover{
            cursor: pointer;
            background-color: white;
            color: indigo;
            a{
              color: indigo;
            }
          }
        }
        img{
        }
      }
      .right_image{
        width: 750px;
        height: 600px;
        .btn_image{
          display: flex;
          width: 100%;
          margin: 0 auto;
          height: 100%;
        }
      }
    }
    .about{
      padding: 10px 20px;
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      h1{
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 30px;
      }
      .frames{
        padding: 40px 0;
        display: flex;
        gap: 10px;
        margin-bottom: 40px;
        border-top: 1px solid darkgray;
        justify-content: space-between;
        .frame{
          font-size: 22px;
          width: 100%;
          h2{
            font-weight: bold;
          }
          span{
            display: flex;
            width: 300px;
          }
        }
      }
      .card_image{
        display: flex;
        height: 600px;
        justify-content: center;
        border-radius: 16px;
        margin-bottom: 50px;
        background-image: url("@/assets/cardImage.png");
        background-size: cover;
        background-repeat: no-repeat;
        .image_info{
          display: flex;
          flex-direction: column;
          position: relative;
          align-items: center;
          left: 200px;
          height: 550px;
          .info_item{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 80px;
            height: 100%;
            margin-top: 40px;
            color: white;
            p{
              font-weight: 700;
              width: 380px;
              font-size: 40px;
              line-height: 48px;
              text-align: justify;
            }
            span{
              width: 300px;
              text-align: justify;
              font-weight: bold;
              font-size: 20px;
            }
          }
        }
        .btn_item{
          width: 150px;
          height: 60px;
          border-radius: 20px;
          background-color: indigo;
          border: 2px solid indigo;
          font-size: 20px;
          font-weight: bold;
          color: white;
        }
        .btn_item:hover{
          cursor: pointer;
          background-color: white;
          color: indigo;
        }
        a{
          color: white;
        }
        a:hover{
          background: none;
          color: indigo;
        }
      }
    }
    section{
      display: flex;
      flex-direction: column;
      .title_Items{
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        margin-bottom: 30px;
        gap: 16px;
        h2{
          font-weight: 700;
          font-size: 50px;
          line-height: 60px;
        }
        span{
          width: 300px;
          color: #666666;
        }
      }
      .section_items{
        display: flex;
        justify-content: space-between;
        width: 100%;
        .section_item{
          display: flex;
          padding: 30px 20px;
          width: 500px;
          border-radius: 12px;
          background-color: #f3f6f6;
          flex-direction: column;
          height: 500px;
          position: relative;
          margin-bottom: 60px;
          .section_card{
            display: flex;
            height: 300px;
            flex-direction: column;
            h2{
              font-size: 38px;
              font-weight: 700;
              line-height: 39px;
              height: 80px;
              margin-bottom: 20px;
            }
            p{
              line-height: 20px;
              height: 20px;
              font-size: 16px;
              font-weight: 500;
              margin-bottom: 8px;
              color: #056AC7;
            }
          }
          img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: absolute;
            bottom: 40px;
            right: 40px;
          }
        }
      }
      .section_image_items{
        width: 100%;
        display: flex;
        height: 600px;
        padding: 30px;
        margin-bottom: 50px;
        background: radial-gradient(95.44% 490.36% at 92.87% 11.25%, #33A9FF 0%, #33FFF3 100%);
        border-radius: 16px;
        .section_image{
          display: flex;
          width: 50%;
        }
        .section_card_right{
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          padding: 20px 0;
          height: 480px;
          .right_items{
            margin-top: 40px;
            p{
              width: 550px;
              font-size: 35px;
              line-height: 48px;
              color: white;
            }
          }
          .btn_item{
            width: 200px;
            background-color: indigo;
            border: none;
            height: 50px;
            border-radius: 60px;
            color: white;
            font-size: 18px;
            line-height: 18px;
            a{
              color: white;
            }
            a:hover{
              list-style-type: none;
              background: none;
              color: indigo;
            }
          }
          .btn_item:hover{
            cursor: pointer;
            background-color: white;
            color: indigo;
          }
        }
      }
    }
    .card_faq{
      padding-top: 20px;
      width: 90%;
      margin: 60px 50px 100px 50px;
      display: flex;
      border-top: 1px solid #cccccc;
      h2{
        width: 30%;
        font-size: 50px;
        font-weight: 700;
      }
      .faq_right{
        width: 80%;
        display: flex;
        flex-direction: column;
        .accordion-container{
          display: flex;
          width: 100%;
          flex-direction: column;
          .accordion-header{
            width: 100%;
            height: 100px;
            display: flex;
            color: #676D83;
            align-items: center;
            justify-content: space-between;
          }
          .accordion-body{
            padding-bottom: 20px;
          }
        }
      }
    }
    .cardItems{
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 600px;
      margin-bottom: 50px;
      background: radial-gradient(333.17% 80.94% at 51.32% 69.21%, #3DA0FC 0%, rgba(2, 227, 214, .2) 100%);
      border-radius: 16px;
      .cardLeft{
        display: flex;
        flex-direction: column;
        width: 500px;
        min-height: 500px;
        background-color: #ffffff;
        border-radius: 8px;
        padding: 20px;
        gap: 20px;
        margin: 30px;
        h2{
          font-size: 30px;
          font-weight: 700;
          line-height: 40px;
          //width: 300px;
          margin-bottom: 40px;
        }
        input{
          line-height: 25px;
          padding: 10px;
          font-size: 16px;
          background-color: #f2f2f2;
          border-radius: 8px;
          border: none;
        }
        button{
          background-color: #2c3e50;
          color: white;
          height: 40px;
          border-radius: 8px;
          margin-top: 40px;
        }
        .btn_save:hover{
          cursor: pointer;
        }
      }
      .cardRight{
        display: flex;
        flex-direction: column;
        width: 55%;
        justify-content: space-around;
        height: 100%;
        position: relative;
        p{
          position: absolute;
          top: 140px;
          width: 350px;
          color: white;
          font-size: 30px;
        }
        img{
          position: absolute;
          bottom: 0;
          right: 100px;
        }
      }
    }
    footer{
      display: flex;
      margin-bottom: 100px;
      .footerTitle{
        display: flex;
        width: 40%;
        height: 100px;
        align-items: center;
        font-size: 50px;
        font-weight: 700;
        color: indigo;
        img{
          width: 50px;
          height: 50px;
        }
      }
      .footer_right{
        display: flex;
        width: 60%;
        gap: 20px;
        flex-direction: column;
        img{
          width: 35px;
        }
        a{
          display: flex;
          align-items: center;
          gap: 10px;
          background: none;
          color: blue;
          cursor: pointer;
          img{
            width: 50px;
          }
        }
        label{
          display: flex;
          align-items: center;
          gap: 20px;
          color: #056ac7;
          margin-left: 10px;
        }
        p{
          width: 100%;
          border: 1px solid darkgray;
        }
      }
    }
  }
}
</style>

<style scoped>
@media (max-width: 1200px){
  .container{
    width: 100%;
    .sticky{
      .logo_item{
      }
      .list_items{
        display: flex;
        width: 400px;
        justify-content: space-between;
        .ul_item{
          display: none;
        }
        .btn_item{
          display: none;
          a{
            display: none;
          }
        }
        .menu_item{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 45px;
          width: 40px;
          background-image: url("@/assets/menu.png");
          background-size: cover;
          background-repeat: no-repeat;
          position: absolute;
          right: 100px;
        }
        .close_icon{
          display: none;
        }
        .active{
          display: flex;
          position: fixed;
          z-index: 1;
          background-color: darkgray;
          top: 0;
          padding: 50px 0;
          right: 0;
          width: 400px;
          height: 500px;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          flex-direction: column;
          a{
            width: 100px;
            height: 40px;
            display: flex;
            justify-content: center;
            background-color: #676D83;
            color: white;
          }
        }
        .activeClose{
          display: flex;
          position: absolute;
          width: 30px;
          height: 30px;
          top: 50px;
          background-image: url("@/assets/close.png");
          background-size: cover;
          background-repeat: no-repeat;
          z-index: 1;
          right: 50px;
        }
        .activeClose:hover{
          cursor: pointer;
        }
      }
    }
    .content{
      width: 100%;
      display: flex;
      .card{
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-around;
        align-items: center;
        .card_item{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 90%;
          .card_items{
            display: flex;
            text-align: center;
            height: 500px;
            padding-left: 30px;
            justify-content: center;
            .card_lorem{
              width: 100%;
            }
            .imageItem{
              position: relative;
              top: 50px;
              left: 50px;
              display: flex;
            }
          }
        }
        .right_image{
          display: flex;
          width: 800px;
          .btn_image{
            width: 100%;
          }
        }
      }
      .cardItems{
        .cardRight{
          display: flex;
          justify-content: space-around;
          align-items: center;
          text-align: justify;
          p{
            position: absolute;
            top: 20px;
            display: flex;
          }
        }
      }
    }
  }
}
@media (max-width: 1140px) {
  .section_image_items{
    height: 800px;
    width: 100%;
    display: flex;
    gap: 50px;
    .section_image{
    }
    .section_card_right{
      display: flex;
      width: 600px;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 0;
      position: relative;
      right: 5px;
     .right_items{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       img{
         width: 80px;
       }
       p{
         width: 90%;
         display: flex;
         padding-left: 40px;
         font-size: 24px;
       }
     }
    }
  }
  .cardItems{
    .cardRight{
      display: flex;
      align-items: center;
      text-align: center;
      p{
        position: absolute;
        top: 20px;
        display: flex;
      }
      img{
        width: 400px;
        position: absolute;

      }
    }
  }
}
@media (max-width: 910px) {
  .content{
    height: 100%;
    .about{
      display: flex;
      width: 100%;
      .card_image{
        width: 100%;
        .image_info{
          width: 100%;
          display: flex;
          .info_item{
            display: flex;
            width: 550px;
            p{
              width: 100%;
            }
          }
        }
      }
    }
    section{
      display: flex;
      .title_Items{
        h2{
          margin-top: 30px;
        }
      }
      .section_items{
        width: 100%;
        display: flex;
        flex-direction: column;
        .section_item{
          width: 100%;
          display: flex;
          .section_card{
            display: flex;
            width: 100%;
            p{
              width: 100%;
              height: 140px;
              display: flex;
              align-items: center;
              justify-content: center;
              line-height: 28px;
              font-size: 26px;
            }
          }
        }
      }
      .section_image_items{
        display: flex;
        align-items: center;
        height: 100%;
        flex-direction: column;
        .section_image{
          width: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            width: 100%;
          }
        }
      }
    }
    .cardItems{
      width: 100%;
      min-height: 900px;
      display: flex;
      flex-direction: column-reverse;
      .cardRight{
        width: 100%;
        display: flex;
        justify-content: space-between;
        p{
          left: 20px;
          position: absolute;
        }
        img{
          height: 100%;
          position: absolute;
          right: 10px;
        }
      }
    }
  }
}
@media (max-width: 800px) {
  .sticky{
    .logo_item{
      h1{
        span{
          display: flex;
          font-size: 40px;
        }
      }
    }
  }
  .content{
    .card{
      .card_item{
        .card_items{
          display: flex;
          justify-content: center;
          text-align: center;
          .card_lorem{
            display: flex;
            justify-content: center;
            align-items: center;
            h1{
              font-size: 80px;
              font-weight: bold;
            }
          }
        }
      }
    }
    .about{
      .frames{
        display: flex;
        flex-direction: column;
        .frame{
          justify-content: space-between;
          padding-left: 20px;
          span{
            width: 100%;
          }
        }
      }
      .card_image{
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        margin: 0 auto;
        justify-content: space-between;
        .image_info{
          position: absolute;
          width: 500px;
          align-items: center;
          display: flex;
          text-align: center;
          .info_item{
            display: flex;
            align-items: center;
            width: 520px;
            p{
              display: flex;
              font-size: 30px;
              width: 100%;
            }
          }
        }
      }
    }
    .section_image_items{
      width: 500px;
      .section_image{
        width: 400px;
        display: flex;;
        img{
        }
      }
    }
    footer{
      display: flex;
      flex-direction: column;
      align-items: center;
      .footerTitle{
        width: 450px;
      }
    }
  }
}

@media (max-width: 680px) {
  .sticky{
    .logo_item{
      width: 300px;
      h1{
        span{
          display: none;
        }
      }
    }
    .list_items{
      display: flex;
    }
    .languageItem{
      width: 60px;
      display: flex;
    }
    .menu_item{
      display: flex;
      width: 40px;
    }
  }
  .content{
    .card{
      display: flex;
      .card_item{
        .card_items{
          .card_lorem{
            display: flex;
            h1{
              font-size: 40px;
            }
          }
        }
      }
    }
    .cardItems{
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column-reverse;
      .cardRight{
        width: 100%;
        display: flex;
        flex-direction: column;
        p{
          left: 20px;
          position: absolute;
        }
        img{
          height: 100%;
          width: 350px;
          position: absolute;
          right: 5px;
        }
      }
    }
  }
}
@media (max-width: 580px) {
  .sticky{
    .languageItem{
      width: 100px;
    }
  }
}
</style>