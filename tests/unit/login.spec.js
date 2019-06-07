import { mount } from "@vue/test-utils";
import LoginCard from "@/components/LoginCard.vue";

describe("Component", () => {
  const wrapper = mount(LoginCard);
  const textfield = wrapper.findAll("v-text-field");
  test("Password changes visibility on clicking the append icon", () => {
    expect(wrapper.vm.showPassword).toBe(false);
    textfield.at(1).trigger("click:append");
    expect(wrapper.vm.showPassword).toBe(true);
  });
  test("webpage must contain google sign in button", () => {
    expect(wrapper.find("img.gsign-responsive").exists()).toBe(true);
  });
});
