 import { describe,it,expect } from "vitest"; 
 import { mount } from '@vue/test-utils'; 
import HealthTodoListFilter from '../components/HealthTodoListFilter.vue';  

describe('HealthTodoListFilter', () => {
  it('renders three radio buttons correctly', () => {
 
    const defaultTodoFilter = 'all';
 
    const wrapper = mount(HealthTodoListFilter, {
      props: { defaultTodoFilter },
    });
 
    const radioButtons = wrapper.findAllComponents({ name: 'AppRadioButton' });
    expect(radioButtons.length).toBe(3);

    // Expect that the radio buttons have the correct labels
    expect(radioButtons[0].text()).toContain('All');
    expect(radioButtons[1].text()).toContain('Active');
    expect(radioButtons[2].text()).toContain('Completed');
  });
  
});