<template>
 <div id="wrapper">
   <div class="row">
     <div class="col-lg-3">
       <div class="card-box">
         <h4 class="header-title m-t-0">Master</h4>
         <p class="text-muted font-14 m-b-20">
           Create a master to create new chamber configurations
         </p>

         <form role="form">
           <div class="form-group row">
             <div class="col-8">
               <input class="form-control" placeholder="Username" v-model="newMaster.username" >
             </div>
             <div class="col-4">
               <button type="submit" class="btn btn-primary waves-effect waves-light" v-on:click="postMaster()">
                 Add
               </button>
             </div>
             <div class="col-12">
               <button type="button" v-for="master in masters" class="btn btn-dark waves-effect waves-light ">
                 {{ master.username }}
               </button>
             </div>
           </div>
         </form>

         <div class="visible-lg" style="height: 79px;"></div>
       </div>
     </div>
     <div class="col-lg-3">
       <div class="card-box">
         <h4 class="header-title m-t-0">Category</h4>
         <p class="text-muted font-14 m-b-20">
           Create a configuration category
         </p>

         <form role="form">
           <div class="form-group row">
             <div class="col-8">
               <input class="form-control" placeholder="Category" v-model="newCategory.name" >
             </div>
             <div class="col-4">
               <button type="submit" class="btn btn-primary waves-effect waves-light" v-on:click="postCategory()">
                 Add
               </button>
             </div>
             <div class="col-12">
               <button type="button" v-for="category in categories" class="btn btn-dark waves-effect waves-light ">
                 {{ category.name }}
               </button>
             </div>
           </div>
         </form>

         <div class="visible-lg" style="height: 79px;"></div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        newMaster  : {},
        masters: [],
        errors  : [],
        newCategory: {},
        categories : [],
        apiUrl: 'http://localhost:8090/api'
    }},
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData()
    },
    methods: {
        fetchData: function(){
            axios.get(this.apiUrl + '/master/list')
              .then(response => {
                  this.masters = response.data;
              })
          axios.get(this.apiUrl + '/chamber/category/list')
            .then(response => {
              this.categories = response.data;
            })

        },
        postMaster: function() {
          axios.post(this.apiUrl + '/master/add', this.newMaster)
          .then(data => {this.masters.push(data)})
        },
        postCategory: function() {
        axios.post(this.apiUrl + '/chamber/category/add', this.newCategory)
          .then(data => {
              this.categories.push(data)
          })
        },
    }
  }
</script>
