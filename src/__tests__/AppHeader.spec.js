import { describe,it,expect } from "vitest"; 
 import { mount } from '@vue/test-utils';
import AppHeader from '../components/layout/AppHeader.vue'
 
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


    it('To test if image URL path is valid', () => {
        const wrapper = mount(AppHeader); 
        const moonSVG = wrapper.find('[alt="moon"]');
        const sunSVG = wrapper.find('[alt="sun"]');

         //Svg image location
        const moonSvgURL = '/todo-app/src/assets/images/ICON-MOON.SVG'
        const sunSvgURL = '/todo-app/src/assets/images/ICON-SUN.SVG'
    
        expect(moonSVG.exists()).toBe(true);  
        expect(moonSVG.attributes('src')).toBe(moonSvgURL);
    
        expect(sunSVG.exists()).toBe(true);  
        expect(sunSVG.attributes('src')).toBe(sunSvgURL);
    })
  
   
  });