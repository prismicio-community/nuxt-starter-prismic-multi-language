import MyComponent from '../../../../slices/Image';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Image'
}


export const _White = () => ({
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
      mock: {"variation":"white","name":"White","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"withAccent":false},"id":"_White"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_White.storyName = 'White'

export const _LightSlate = () => ({
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
      mock: {"variation":"lightSlate","name":"Light Slate","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"withAccent":false},"id":"_LightSlate"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_LightSlate.storyName = 'Light Slate'
