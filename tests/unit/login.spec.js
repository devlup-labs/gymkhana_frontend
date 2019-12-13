import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";
import LoginCard from "@/components/LoginCard.vue";

const localVue = createLocalVue();

describe("LoginCard.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should change password visibility on clicking the append icon", () => {
    const wrapper = mount(LoginCard, {
      localVue,
      vuetify
    });

    const fields = wrapper.findAll(".v-text-field");
    expect(fields.length).toBe(2);

    expect(wrapper.vm.showPassword).toBe(false);
    fields.at(1).vm.$emit("click:append");
    expect(wrapper.vm.showPassword).toBe(true);

    expect(wrapper.find("img.gsign-responsive").exists()).toBe(true);
  });
});
