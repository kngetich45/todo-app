import { describe,it,expect } from "vitest"; 
 import { mount,shallowMount } from '@vue/test-utils';
import AppHeader from '../components/layout/AppHeader.vue'
import MoonIcon from '../assets/icons/Moon.vue'
import SunIcon from '../assets/icons/Moon.vue'
 
describe('AppHeader.vue', () => {
    it('should emit toggleDarkMode when the button is clicked', async () => {
      const wrapper = mount(AppHeader); 
      const toggleButton = wrapper.find('button[aria-label="Toggle night mode"]');  
      await toggleButton.trigger('click'); 
      expect(wrapper.emitted().toggleDarkMode).toBeTruthy(); 
    });

    it('Test if H1 exist and contain Todo', async () => {
        const wrapper = mount(AppHeader); 
        const h1TextElement = wrapper.find('h1');   
        expect(h1TextElement.exists()).toBe(true);  
        expect(h1TextElement.text()).toBe('Todo');
      });


    it('To test if image compoment is valid', () => {
        const wrapper = shallowMount(AppHeader); 
        const moonSVG = wrapper.find('[alt="moon"]');
        const sunSVG = wrapper.find('[alt="sun"]');
  
        expect(moonSVG.exists()).toBe(true);  
        expect(sunSVG.exists()).toBe(true);   
    });


    it('Should render moon svg compoment correctly', () => {
      const wrapper = mount(MoonIcon);
      expect(wrapper.exists()).toBe(true); 
      expect(wrapper.find('svg').attributes('width')).toBe('26');
      expect(wrapper.find('svg').attributes('height')).toBe('26'); 
      expect(wrapper.find('path').attributes('fill')).toBe('#FFF');

    });
  
    it('Should render sun svg compoment correctly', () => {
   
      const wrapper = mount(SunIcon);
      expect(wrapper.exists()).toBe(true); 
      expect(wrapper.find('svg').attributes('width')).toBe('26');
      expect(wrapper.find('svg').attributes('height')).toBe('26'); 
      expect(wrapper.find('path').attributes('fill')).toBe('#FFF');

    }); 
   
  });