import { describe,it,expect } from "vitest"; 
 import { mount } from '@vue/test-utils';
import AppRadioButton from '../components/radioButtons/AppRadioButton.vue'
  

  describe('AppRadioButton.vue', () => {
    it('Should emits update:modelValue when the radio input is changed', async () => { 
      const wrapper = mount(AppRadioButton, {
        props: {
          value: 'inputValue', // String
          modelValue: 'modelInput', // String
        },
      });
   
      const radioInput = wrapper.find('input[type="radio"]');
      await radioInput.setChecked(); 
      expect(wrapper.emitted('update:modelValue')).toBeTruthy();
      expect(wrapper.emitted('update:modelValue')[0][0]).toBe('inputValue');  
    });
   
  });