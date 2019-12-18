<template lang="pug">
  v-content.pa-0
    section
      v-carousel(height="600" cycle hide-delimiter-background )
        v-carousel-item( v-for="(img,n) in homeCarousel" :key="n" transition="fade-transition"
          reverse-transition="fade-transition" )
          v-img(height="100%" :src="img.image")

    section.pa-12
      h1.mb-2.display-1.text-center About Students' Gymkhana
      v-layout(row).pt-10.justify-center
        v-flex.xs12.md4.offset-md1.sm8
          v-layout
            v-img(src="../assets/workstation-336369.jpg" )
        v-flex.md6.xs12
          v-layout(row).align-center.font-weight-regular.fill-height.justify-center
            v-flex.md12.offset-md2.pt-3.sm8
              p.subtitle-1.text-center  Students' Gymkhana, IIT Jodhpur is the governing body that looks after all student activities.
              blockquote().pl-4.subtitle-1 A place where you can find a plethora of opportunities and a place where you can pursue your passion.

    v-container(fluid).pa-0
      v-parallax(src="../assets/hero.jpeg" height="800" )
        v-overlay(absolute)
          v-layout.display-2.justify-center.ma-6 Festivals
          v-carousel(height="550px" :show-arrows="false" cycle hide-delimiter-background ).text-center
            v-carousel-item(transition="fade-transition" reverse-transition="fade-transition" v-for="(fest,i) in festCarouselData" :key="i")
              v-layout(row).justify-center.align-center
                div.display-1 {{fest.title}}
                v-btn(icon ripple large :to="fest.to").ml-2
                    v-icon mdi-link
              v-layout(row).pt-5.justify-center.align-center
                v-flex.xs12.md5.offset-md1.sm12
                  v-layout.justify-center
                    v-img( :src="require('../assets/'+fest.image)" max-height="350" max-width="450")
                v-flex.md6.xs12.sm12
                  v-layout(row).font-weight-regular.justify-center.mt-2
                    v-flex.md10.sm10.xs10
                      p.subtitle-2.text-center.font-weight-bold  {{ fest.about }}
                //v-card(flat tile ).transparent.elevation-0
                  v-card-title.justify-center.display-1 {{ fest.title }}
                  v-card-text.md3
                    v-img(:src="require('../assets/'+fest.image)")
                  v-card-actions
                    v-btn(icon :to="fest.to")
                      v-icon mdi-link
    v-container(fluid)
      v-content
        p.display-1.text-center Societies
        v-layout(row).pa-8
          v-flex(v-for="(society,n) in societies" :key="n" v-if="n<6").md6.xs12.sm12
            v-layout(row ).justify-center.mt-10
              v-hover( v-slot:default="{ hover }")
                v-card(
                  :to="society.to"
                  :elevation="hover ? 15 : 2"
                  class="mx-auto"
                  height="80%"
                  width="80%"
                  )
                  v-img(:src="society.img")
                    v-layout.align-end.fill-height
                      v-card-text(class="my-4 text-center title").stripe {{society.name}}
          v-flex(v-else).md6.offset-md3.xs12.sm12
            v-layout(row).justify-center.mt-5
              v-hover( v-slot:default="{ hover }")
                v-card(
                  :to="society.to"
                  :elevation="hover ? 15 : 2"
                  class="mx-auto"
                  height="80%"
                  width="80%"
                )
                  v-img(:src="society.img")
                    v-layout.align-end.fill-height
                      v-card-text(class="my-4 text-center title").stripe {{society.name}}as


    section
      v-parallax(src="../assets/hero.jpeg" )
        overlay(opacity=".1")
          v-layout(column align-center justify-center)
            div(class="headline white--text mb-4 ")  Web development has never been easier
            em Kick-start your application today

    //v-layout(row).pa-10.justify-center.text-center.align-center
      v-flex
        v-layout.text-center
          p.text-center B
      v-flex.md6.xs12
        v-layout(row).align-center.font-weight-regular.fill-height.justify-center
          v-flex.md12.offset-md2.pt-3.sm8
            p.subtitle-1.text-center a
    //section
      v-container
        v-layout(column  justify-center)
          v-flex.xs12
            v-layout(row).justify-center
              p la
          v-flex.xs12
            v-layout(row).align-center.justify-center
              p B

    v-footer(color="blue darken-2")
      v-layout(row wrap align-center)
        p S
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    home1: { name: "society" },
    festCarouselData: [
      {
        title: "Ignus",
        image: "img1.jpg",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dignissimos et id impedit modi odit placeat sunt tenetur! Eos illum neque provident? Accusantium autem cupiditate debitis doloremque doloribus possimus reprehenderit!  ",
        to: { name: "home" }
      },
      {
        title: "Varchas",
        image: "img2.jpg",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dignissimos et id impedit modi odit placeat sunt tenetur! Eos illum neque provident? Accusantium autem cupiditate debitis doloremque doloribus possimus reprehenderit!  ",
        to: { name: "home" }
      },
      {
        title: "Spandan",
        image: "img3.jpg",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dignissimos et id impedit modi odit placeat sunt tenetur! Eos illum neque provident? Accusantium autem cupiditate debitis doloremque doloribus possimus reprehenderit!  ",
        to: { name: "home" }
      },
      {
        title: "Framed",
        image: "img4.jpg",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dignissimos et id impedit modi odit placeat sunt tenetur! Eos illum neque provident? Accusantium autem cupiditate debitis doloremque doloribus possimus reprehenderit!  ",
        to: { name: "home" }
      }
    ],
    homeCarousel: [
      { image: require("../assets/home1.jpg") },
      { image: require("../assets/home2.jpg") },
      { image: require("../assets/home3.jpg") },
      { image: require("../assets/home4.jpg") },
      { image: require("../assets/home5.jpg") }
    ],
    societies: [
      {
        name: "Society of design and arts",
        to: { name: "society" },
        img: require("../assets/img1.jpg")
      },
      {
        name: "Students Tech Society",
        to: { name: "society" },
        img: require("../assets/img2.jpg")
      },
      {
        name: "Students Elected Representative Society",
        to: { name: "society" },
        img: require("../assets/img3.jpg")
      },
      {
        name: "Student Campus Life Society",
        to: { name: "society" },
        img: require("../assets/img4.jpg")
      },
      {
        name: "Students Cult and Lit Society",
        to: { name: "society" },
        img: require("../assets/home3.jpg")
      },
      {
        name: "Students Sports and games Society",
        to: { name: "society" },
        img: require("../assets/home2.jpg")
      },
      {
        name: "Students Acad Society",
        to: { name: "society" },
        img: require("../assets/home4.jpg")
      }
    ]
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
blockquote {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-left: 0.5rem solid #4791db;
}
.stripe {
  background-color: rgba(255, 255, 255, 0.74);
}
.stripe-texts {
  color: #2a2a2a;
  font-family: Roboto, sans-serif;
}
</style>
