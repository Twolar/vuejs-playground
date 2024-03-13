
<template>
  <div>
    <FormHelper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Info about the form</p>
      </div>
      <div slot="form-fields">
        <h3>This is the fields of the form</h3>
        <p>Info about the fields</p>
      </div>
      <div slot="form-controls">
        <h3>This is the controls of the form</h3>
        <p>Info about the controls</p>
      </div>
    </FormHelper>
  </div>
</template>

<script>
import FormHelper from './FormHelper.vue';

export default {
  components: {
    FormHelper
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
  }
};
</script>


<style scoped></style>
