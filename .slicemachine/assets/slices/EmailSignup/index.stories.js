import MyComponent from '../../../../slices/EmailSignup';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/EmailSignup'
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
      mock: {"variation":"DefaultSlice","name":"DefaultSlice","slice_type":"email_signup","items":[],"primary":{"sectionTitle":[{"type":"heading1","text":"Integrate one-to-one systems","spans":[]}],"description":[{"type":"paragraph","text":"Irure adipisicing velit id eu. Id dolor in laboris ut nisi id in qui laboris ipsum sunt amet. Id ex minim occaecat aliquip nostrud dolore proident incididunt aliquip occaecat.","spans":[]}],"inputLabel":[{"type":"paragraph","text":"Voluptate amet amet eiusmod pariatur consequat aliquip. Do nisi sit in cillum ut velit.","spans":[]}],"inputPlaceholder":[{"type":"paragraph","text":"Occaecat ad tempor Lorem sint occaecat officia sunt duis.","spans":[]}],"buttonText":[{"type":"paragraph","text":"Id sit nisi anim sint excepteur pariatur amet sit officia. Reprehenderit non ullamco ea mollit minim dolor.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'DefaultSlice'
