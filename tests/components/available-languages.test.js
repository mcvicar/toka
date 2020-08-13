import { shallowMount } from '@vue/test-utils'
import availableLanguages from '../../src/components/languages/available-languages.vue'
import languageSpecs from '../../src/components/languages/languages.json'

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(availableLanguages, {
    propsData: {
      value: ' ',
      id: 'exampleInput',
      listId: 'exampleDatalist'
    }
  })
});

afterEach(() => {
    wrapper.destroy();
});

describe('Basic available languages component test', () => {
  test('is a Vue instance', () => {
      expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('Is the input available?', () => {
    var actual = wrapper.find('#exampleInput').exists();
    var expected = true;
    expect(actual).toBe(expected);
  });

  test('Is the datalist available?', () => {
    var actual = wrapper.find('#exampleDatalist').exists();
    var expected = true;
    expect(actual).toBe(expected);
  });

  test('Does the datalist contain the same text?', () => {
    var SelectedLang = Object.keys(languageSpecs)[10];
    var lang = languageSpecs[SelectedLang];
    var expected = lang.spec + " - " + lang.name;
    const actual = wrapper.findAll('option').at(10);
    expect(actual.text()).toBe(expected);
  });


})
