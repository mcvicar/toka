import { shallowMount } from '@vue/test-utils'
import availableLanguages from '../../src/components/languages/available-languages.vue'

test('availableLanguages', () => {
  const wrapper = shallowMount(availableLanguages)

  wrapper.setData({ value: ' ' })
  wrapper.setData({ listId: 'exampleInput' })
  wrapper.setData({ listId: 'exampleDatalist' })

  expect(wrapper.find('#exampleInput').exists()).toBe(true)
  expect(wrapper.find('#exampleDatalist').exists()).toBe(true)
})
