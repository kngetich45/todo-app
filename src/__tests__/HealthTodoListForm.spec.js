import { describe,it,expect } from "vitest"; 
 import { mount } from '@vue/test-utils';
import HealthTodoListForm from '../components/HealthTodoListForm.vue'
 
describe('HealthTodoListForm', () => {
    it('Should emits createNewTodo when form is submitted with a new todo', async () => {
      const wrapper = mount(HealthTodoListForm); 
   
      const input = wrapper.find('input[type="text"]'); 
      await input.setValue('New Todo input'); 
      const formTodo = wrapper.find('form'); 
      await formTodo.trigger('submit.prevent');
  
      // Expect that the "createNewTodo" event was emitted with the new todo text
      expect(wrapper.emitted('createNewTodo')).toBeTruthy();
      expect(wrapper.emitted('createNewTodo')[0][0]).toBe('New Todo input');
    });
  
    it('Does not emit createNewTodo  when form is submitted with an empty todo input', async () => {
      const wrapper = mount(HealthTodoListForm); 
      const input = wrapper.find('input[type="text"]'); 
      await input.setValue(''); 
      const form = wrapper.find('form'); 
      await form.trigger('submit.prevent');
  
      // Expect that the "createNewTodo" event was not emitted
      expect(wrapper.emitted('createNewTodo')).toBeFalsy();
    });
   
  });