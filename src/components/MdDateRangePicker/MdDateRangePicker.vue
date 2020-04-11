<template>
  <md-field :class="['md-datepicker', { 'md-native': !this.mdOverrideNative }]" md-clearable>
    <md-date-icon class="md-date-icon" @click.native="toggleMinDateDialog" />
    <span class="input-item">
      <md-input :type="type" ref="minDate" v-model="minDate" @focus.native="onMinDateFocus" :pattern="pattern" />
      <keep-alive>
        <md-datepicker-dialog
          v-if="showMinDateDialog"
          :md-date.sync="localMinDate"
          :md-disabled-dates="mdDisabledDates"
          :mdImmediately="mdImmediately"
          @md-closed="toggleMinDateDialog"
        />
      </keep-alive>
    </span>
    <slot />
    -
    <span class="input-item">
      <md-input :type="type" ref="maxDate" v-model="maxDate" @focus.native="onMaxDateFocus" :pattern="pattern" />
      <keep-alive>
        <md-datepicker-dialog
          v-if="showMaxDateDialog"
          :md-date.sync="localMaxDate"
          :md-disabled-dates="maxDateDisabledDates"
          :mdImmediately="mdImmediately"
          @md-closed="toggleMaxDateDialog"
        />
      </keep-alive>
    </span>
  </md-field>
</template>

<script>
  import Vue from 'vue'
  import isFirefox from 'is-firefox'
  import format from 'date-fns/format'
  import parse from 'date-fns/parse'
  import isValid from 'date-fns/isValid'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdOverlay from 'components/MdOverlay/MdOverlay'
  import MdDatepickerDialog from './../MdDatepicker/MdDatepickerDialog'
  import MdDateIcon from 'core/icons/MdDateIcon'
  import MdDebounce from 'core/utils/MdDebounce'
  import MdField from 'components/MdField/MdField'
  import MdInput from 'components/MdField/MdInput/MdInput'

  export default {
    name: 'MdDateRangePicker',
    components: {
      MdOverlay,
      MdDateIcon,
      MdField,
      MdInput,
      MdDatepickerDialog
    },
    props: {
      value: [String, Number, Date],
      mdDisabledDates: [Array, Function],
      mdOpenOnFocus: {
        type: Boolean,
        default: true
      },
      mdOverrideNative: {
        type: Boolean,
        default: true
      },
      mdModelType: {
        type: Function,
        default: Date,
        ...MdPropValidator('md-model-type', [Date, String, Number])
      },
      MdDebounce: {
        type: Number,
        default: 1000
      }
    },
    data: () => ({
      showMinDateDialog: false,
      showMaxDateDialog: false,
      minDate: '',
      maxDate: '',
      // String for input
      inputDate: '',
      // Date for real value
      localDate: null,
      localMinDate: null,
      localMaxDate: null,
      mdImmediately: true,
    }),
    computed: {
      locale () {
        return this.$material.locale
      },
      type () {
        return this.mdOverrideNative
          ? 'text'
          : 'date'
      },
      dateFormat () {
        return this.locale.dateFormat || 'yyyy-MM-dd'
      },
      modelType () {
        if (this.isModelTypeString) {
          return String
        } else if (this.isModelTypeNumber) {
          return Number
        } else if (this.isModelTypeDate) {
          return Date
        } else {
          return this.mdModelType
        }
      },
      isModelNull () {
        return this.value === null || this.value === undefined
      },
      isModelTypeString () {
        return typeof this.value === 'string'
      },
      isModelTypeNumber () {
        return Number.isInteger(this.value) && this.value >= 0
      },
      isModelTypeDate () {
        return typeof this.value === 'object' && this.value instanceof Date && isValid(this.value)
      },
      localMinDateString () {
        return this.localMinDate && format(this.localMinDate, this.dateFormat)
      },
      localMaxDateString () {
        return this.localMaxDate && format(this.localMaxDate, this.dateFormat)
      },
      parsedMinDate () {
        const parsedDate = parse(this.minDate, this.dateFormat, new Date())
        return parsedDate && isValid(parsedDate) ? parsedDate : null
      },
      parsedMaxDate () {
        const parsedDate = parse(this.maxDate, this.dateFormat, new Date())
        return parsedDate && isValid(parsedDate) ? parsedDate : null
      },
      pattern () {
        return this.dateFormat.replace(/yyyy|MM|dd/g, match => {
          switch (match) {
          case 'yyyy':
            return '[0-9]{4}'
          case 'MM':
          case 'dd':
            return '[0-9]{2}'
          }
        })
      }
    },
    watch: {
      minDate (value) {
        this.minDateToLocalDate()
      },
      maxDate (value) {
        this.maxDateToLocalDate()
      },
      localMinDate() {
        this.minDate = this.localMinDateString;
      },
      localMaxDate() {
        this.maxDate = this.localMaxDateString;
      },
      localMinDateString () {
        this.$emit('minDate', this.localMinDateString)
      },
      localMaxDateString () {
        this.$emit('maxDate', this.localMaxDateString)
      },
      localMinDateNumber () {
        this.$emit('minDate', this.localMinDateNumber)
      },
      localMaxDateNumber () {
        this.$emit('maxDate', this.localMaxDateNumber)
      },
      value: {
        immediate: true,
        handler() {
          this.valueDateToLocalDate()
        }
      },
      mdModelType (type) {
        switch (type) {
        case Date:
          this.$emit('minDate', this.localMinDate);
          this.$emit('maxDate', this.localMaxDate);
          break;
        case String:
          this.$emit('minDate', this.localMinDateString);
          this.$emit('maxDate', this.localMaxDateString);
          break;
        case Number:
          this.$emit('minDate', this.localMinDateNumber);
          this.$emit('maxDate', this.localMaxDateNumber);
          break;
        }
      },
      dateFormat () {
        if (this.localDate) {
          this.inputDate = format(this.localDate, this.dateFormat)
        }
      }
    },
    methods: {
      maxDateDisabledDates(date) {
        return new Date(this.minDate) >= date
      },
      toggleMinDateDialog () {
        if (!isFirefox || this.mdOverrideNative) {
          this.showMinDateDialog = !this.showMinDateDialog
          if (this.showMinDateDialog) {
            this.$emit('md-minDate-opened');
          } else {
            this.$emit('md-minDate-closed');
            this.toggleMaxDateDialog();
          }
        } else {
          this.$refs.minDate.$el.click()
        }
      },
      toggleMaxDateDialog () {
        if (!isFirefox || this.mdOverrideNative) {
          this.showMaxDateDialog = !this.showMaxDateDialog
          if (this.showMaxDateDialog) {
            this.$emit('md-maxDate-opened')
          } else {
            this.$emit('md-maxDate-closed')
          }
        } else {
          this.$refs.maxDate.$el.click()
        }
      },
      onMinDateFocus() {
        this.mdImmediately = true;
        if (this.mdOpenOnFocus) {
          this.toggleMinDateDialog()
        }
      },
      onMaxDateFocus() {
        this.mdImmediately = false;
        if (this.mdOpenOnFocus) {
          this.toggleMaxDateDialog()
        }
      },
      minDateToLocalDate () {
        if (this.minDate) {
          if (this.parsedMinDate) {
            this.localMinDate = this.parsedMinDate
          }
        } else {
          this.localMinDate = null
        }
      },
      maxDateToLocalDate () {
        if (this.maxDate) {
          if (this.parsedMaxDate) {
            this.localMaxDate = this.parsedMaxDate
          }
        } else {
          this.localMaxDate = null
        }
      },
      valueDateToLocalDate () {
        if (this.isModelNull) {
          this.localMinDate = null
        } else if (this.isModelTypeNumber) {
          this.localMinDate = new Date(this.value)
        } else if (this.isModelTypeDate) {
          this.localMinDate = this.value
        } else if (this.isModelTypeString) {
          let parsedDate = parse(this.value, this.dateFormat, new Date())

          if (isValid(parsedDate)) {
            this.localMinDate = parse(this.value, this.dateFormat, new Date())
          } else {
            Vue.util.warn(`The datepicker value is not a valid date. Given value: ${this.value}, format: ${this.dateFormat}`)
          }
        } else {
          Vue.util.warn(`The datepicker value is not a valid date. Given value: ${this.value}`)
        }
      }
    },
    created () {
      this.minDateToLocalDate = MdDebounce(this.minDateToLocalDate, this.MdDebounce);
      this.maxDateToLocalDate = MdDebounce(this.maxDateToLocalDate, this.MdDebounce);
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";
  .input-item{
    margin-left:12px; width: 50%;
  }
  .md-datepicker-overlay {
    opacity: 0;

    @include md-layout-xsmall {
      opacity: 1;
    }
  }

  .md-datepicker {
    &.md-native {
      label {
        top: 0 !important;
      }
    }

    .md-date-icon {
      cursor: pointer;
    }

    input[type=date]::-webkit-clear-button,
    input[type=date]::-webkit-inner-spin-button,
    input[type=date]::-webkit-calendar-picker-indicator {
      display: none;
    }
  }
</style>
