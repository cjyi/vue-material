import material from 'vue-material/material'
import MdDateTimePicker from './MdDateTimePicker'

export default Vue => {
  material(Vue)
  Vue.component(MdDateTimePicker.name, MdDateTimePicker)
}
