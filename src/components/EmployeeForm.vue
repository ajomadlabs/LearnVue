<!-- HTML -->
<template>
  <div>
    <h1>Employee Details</h1>
    <form>
      <!-- EMPLOYEE NAME -->
      <label>Name: -</label>
      <input
        type="text"
        name="employeeName"
        id="employeeName"
        v-model="employeeName"
        placeholder="Enter Employee Name"
      />
      <!-- END -->
    </form>
  </div>
</template>
<!-- END -->

<!-- JAVASCRIPT -->
<script>
export default {
  data() {
    return {
      employeeName: ""
    };
  },
  methods: {}
};
</script>
<!-- END -->

<!-- CSS -->
<style scoped>
</style>
<!-- END -->