import MyComponent from '../../../../slices/TextInfo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextInfo'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"text_info","items":[],"primary":{"sectionTitle":[{"type":"heading1","text":"Whiteboard virtual e-business","spans":[]}],"leftColumnText":[{"type":"paragraph","text":"Aliqua adipisicing veniam reprehenderit excepteur ut velit quis. In in do do qui id irure aliquip tempor ipsum minim dolore dolore.","spans":[]}],"rightColumnText":[{"type":"paragraph","text":"Ex elit eu et eu dolor nulla et dolor id est. Aute quis fugiat laboris enim occaecat id ex pariatur sint. Mollit sit amet pariatur.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
