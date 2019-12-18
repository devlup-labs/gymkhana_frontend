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

    section
      v-parallax(src="../assets/hero.jpeg" height="900" )
        v-overlay(absolute)
          v-layout.display-2.text-center.justify-center.ma-6 Festivals
          v-carousel(height="800px" :show-arrows="false" cycle hide-delimiter-background ).text-center
            v-carousel-item(transition="fade-transition" reverse-transition="fade-transition" v-for="(fest,i) in festCarouselData" :key="i")
              div.display-1.ma-4 {{fest.title}}
              v-layout(column).pt-2.align-center
                v-flex.xs2.md4.sm2
                  v-layout
                    v-img( :src="require('../assets/'+fest.image)" max-height="350" max-width="400")
                  v-layout.pt-2.justify-center.mb-2
                    v-btn(icon :to="fest.to")
                      v-icon mdi-link
                v-flex.md5.xs10.elevation-0
                  v-layout(row).pt-5.stripe.align-center.font-weight-regular.fill-height.justify-center.elevation-12
                    v-flex.md8.sm8.xs8
                      p.subtitle-2.text-center.stripe-texts.font-weight-bold  {{ fest.about }}
                //v-card(flat tile ).transparent.elevation-0
                  v-card-title.justify-center.display-1 {{ fest.title }}
                  v-card-text.md3
                    v-img(:src="require('../assets/'+fest.image)")
                  v-card-actions
                    v-btn(icon :to="fest.to")
                      v-icon mdi-link
    section
      v-parallax(src="../assets/hero.jpeg" height="380")
        v-layout(column align-center justify-center)
          div(class="headline white--text mb-4 text-center")  Web development has never been easier
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
          "Varchas is the sports fest of IIT Jodhpur organized every year in the month of February. This year it was organized from 30thOct to 2nd Nov. Varchas celebrates the spirit of sportsmanship and serves as a platform to showcase countless hours of perspiration put in by college teams to achieve excellence in sports. Varchas was first conducted in the year 2011, with a vision of promoting sports among the colleges of India, particularly Rajasthan and providing the athletes in India a platform to showcase their talent.\n" +
          "\n" +
          "Competitions are held in the fields of football, cricket, table tennis, lawn tennis, badminton, squash, volleyball, basketball, and athletics in national level stadiums of Jodhpur. Varchas promotes healthy competition and is a great opportunity for the teams to prove their mettle in their respective sports.",
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
