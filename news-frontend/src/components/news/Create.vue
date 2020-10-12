<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Create News </h2>
          <form id="create-post-form" @submit.prevent="createNews">
               <div class="form-group col-md-12">
                <label for="title"> Title </label>
                <input type="text" id="title" v-model="title" name="title" class="form-control" placeholder="Enter title">
               </div>
              <div class="form-group col-md-12">
                  <label for="description"> Description </label>
                  <input type="text" id="description" v-model="description" name="description" class="form-control" placeholder="Enter Description">
              </div>
              <div class="form-group col-md-12">
                  <label for="body"> Write Content </label>
                  <textarea id="body" cols="30" rows="5" v-model="body" class="form-control"></textarea>
              </div>
              <div class="form-group col-md-12">
                  <label for="author"> Author </label>
                  <input type="text" id="author" v-model="author" name="author" class="form-control">
              </div>
              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Create News </button>
              </div>          
          </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { server } from "../../utils/helper";
import router from "../../router";
export default {
  data() {
    return {
      title: "",
      description: "",
      body: "",
      author: "",
      date_posted: ""
    };
  },
  created() {
    this.date_posted = new Date().toLocaleDateString();
  },
  methods: {
    createNews() {
      let newsData = {
        title: this.title,
        description: this.description,
        body: this.body,
        author: this.author,
        date_posted: this.date_posted
      };
      this.__submitToServer(newsData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/news/news`, data).then(() => {
        router.push({ name: "home" });
      });
    }
  }
};
</script>