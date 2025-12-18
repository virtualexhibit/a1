import { shallowMount } from '@vue/test-utils'
import CommonLabel from '@/components/Common/CommonLabel.vue'
import { LABEL_RECIPE } from '@/components/Common/Recipes/rCommonLabel'

describe('CommonLabel.vue', () => {
  test('renders default label and text from recipe', () => {
    const wrapper = shallowMount(CommonLabel)

    expect(wrapper.text()).toContain(LABEL_RECIPE.display.label)
    expect(wrapper.text()).toContain(LABEL_RECIPE.display.text)
  })

  test('renders label and text from item props', () => {
    const wrapper = shallowMount(CommonLabel, {
      props: {
        item: {
          display: {
            label: 'System Status',
            text: 'Running',
          },
        },
      },
    })

    expect(wrapper.text()).toContain('System Status')
    expect(wrapper.text()).toContain('Running')
  })

  test('merges recipe and item correctly', () => {
    const wrapper = shallowMount(CommonLabel, {
      props: {
        item: {
          display: {
            text: 'Error',
          },
        },
      },
    })

    expect(wrapper.text()).toContain(LABEL_RECIPE.display.label)
    expect(wrapper.text()).toContain('Error')
  })
})
