import material from 'vue-material/material'
import MdDateRangePicker from './MdDateRangePicker'

export default Vue => {
  material(Vue)
  Vue.component(MdDateRangePicker.name, MdDateRangePicker)
}
