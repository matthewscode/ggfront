<template>
 <div id="wrapper">
<h1>Add Master</h1>
  <input type="text" v-model="master.username">
   <button v-on:click="postMaster()">Add Master</button>
 </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        master: {},
        errors: []
      }
    },

    methods: {
        postMaster: function() {
          axios.post(`http://localhost:8090/api/master/add`, this.master)
        .then(data => {console.log(data)})
        }
    }
  }

</script>
