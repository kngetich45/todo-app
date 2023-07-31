import { describe,it,expect } from "vitest"; 
 import { mount } from '@vue/test-utils';
import HealthTodoListItem from '../components/HealthTodoListItem.vue'
 
describe('HealthTodoListItem', () => {
    it('renders a todo item correctly', () => { 
      const todo = { id: 1,completed: false };
      const index = 0;
      const isFormItem = false; 
      const wrapper = mount(HealthTodoListItem, {
        props: { todo, index, isFormItem },
      }); 
      expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
      expect(wrapper.find('button[aria-label="Delete task"]').exists()).toBe(true);
    });
  
    it('updates checkbox state when todo completion status changes', async () => {
      const todo = { id: 1, completed: false };
      const index = 0;
      const isFormItem = false;
  
      const wrapper = mount(HealthTodoListItem, {
        props: { todo, index, isFormItem },
      }); 
      expect(wrapper.find('input[type="checkbox"]').element.checked).toBe(false); 
      await wrapper.find('input[type="checkbox"]').setChecked(true);
   
      expect(wrapper.emitted('updateTodoCompletion')).toBeTruthy();
      expect(wrapper.emitted('updateTodoCompletion')[0][0]).toBe(true);
    });
 
    it('emits "deleteTodo" event when delete button is clicked', async () => {
      const todo = { id: 1, completed: false };
      const index = 0;
      const isFormItem = false;
  
      const wrapper = mount(HealthTodoListItem, {
        props: { todo, index, isFormItem },
      }); 
      await wrapper.find('button[aria-label="Delete task"]').trigger('click');
  
      // Expect the "deleteTodo" event to be emitted
      expect(wrapper.emitted('deleteTodo')).toBeTruthy();
    });
  });