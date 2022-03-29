import Counter from "../../../src/components/Counter";
import { shallowMount, mount } from "@vue/test-utils";

describe("Counter Component", () => {
  /* test("debe de sei igual al snapshot ", () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  }); */

  test("debe tener el valor por defecto", () => {
    const wrapper = shallowMount(Counter);
    const h2 = wrapper.find("h2");
    console.log(h2);
    expect(h2.text()).toBe("Counter");
  });
});
