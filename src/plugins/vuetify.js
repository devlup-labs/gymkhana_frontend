import Vue from "vue";
import Vuetify from "vuetify/lib";
import Options from "./options";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      parallaxHeight: 350,
      customProperties: true,
      profile: {
        cardHeight: 300
      },
      socialMediaIconMap: Options.socialMediaIconMap
    },
    themes: {
      light: {
        primary: "#ee44aa",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      dark: {
        primary: "#404040",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#CF6679",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
