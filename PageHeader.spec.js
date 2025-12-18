import { shallowMount } from '@vue/test-utils'
import PageHeader from '@/components/AndonSystem/SubComponents/PageHeader.vue'

describe('PageHeader.vue', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('renders header title', () => {
    const wrapper = shallowMount(PageHeader)
    expect(wrapper.find('.title').text()).toBe('アンドンシステム')
  })

  test('sets currentDateTime on mount', () => {
    const wrapper = shallowMount(PageHeader)
    expect(wrapper.vm.currentDateTime).not.toBe('')
  })

  test('updates date time every second', () => {
    const wrapper = shallowMount(PageHeader)
    const initialTime = wrapper.vm.currentDateTime

    jest.advanceTimersByTime(1000)

    expect(wrapper.vm.currentDateTime).not.toBe(initialTime)
  })

  test('clears interval on unmount', () => {
    const clearSpy = jest.spyOn(global, 'clearInterval')
    const wrapper = shallowMount(PageHeader)

    wrapper.unmount()

    expect(clearSpy).toHaveBeenCalled()
  })

  test('formats time in 12-hour format using updateDateTimeFormat', () => {
    const wrapper = shallowMount(PageHeader)

    wrapper.vm.updateDateTimeFormat()

    expect(wrapper.vm.currentDateTime).toMatch(/AM|PM/)
  })
})
