import { shallowMount } from '@vue/test-utils'
import AndonSystem from '@/components/AndonSystem/AndonSystem.vue'
import PageHeader from '@/components/AndonSystem/SubComponents/PageHeader.vue'

describe('AndonSystem.vue', () => {
  test('renders the component', () => {
    const wrapper = shallowMount(AndonSystem)
    expect(wrapper.exists()).toBe(true)
  })

  test('renders PageHeader component', () => {
    const wrapper = shallowMount(AndonSystem)
    expect(wrapper.findComponent(PageHeader).exists()).toBe(true)
  })
})
