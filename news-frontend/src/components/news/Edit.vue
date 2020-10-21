<template>
<div>
      <h4 class="text-center mt-20">
       <small>
         <button class="btn btn-info" v-on:click="navigate()"> View All News </button>
       </small>
    </h4>
        <div class="col-md-12 form-wrapper">
          <h2> Edit News </h2>
          <form id="edit-post-form" @submit.prevent="editNews">
            <div class="form-group col-md-12">
                <label for="title"> Title </label>
                <input type="text" id="title" v-model="news.title" name="title" class="form-control" placeholder="Enter title">
            </div>
            <div class="form-group col-md-12">
                <label for="description"> Description </label>
                <input type="text" id="description" v-model="news.description" name="description" class="form-control" placeholder="Enter Description">
            </div>
            <div class="form-group col-md-12">
                <label for="body"> Write Content </label>
                <textarea id="body" cols="30" rows="5" v-model="news.body" class="form-control"></textarea>
            </div>
            <div class="form-group col-md-12">
                <label for="author"> Author </label>
                <input type="text" id="author" v-model="news.author" name="author" class="form-control">
            </div>

            <div class="form-group col-md-4 pull-right">
                <button class="btn btn-success" type="submit"><b>Edit News</b></button>
            </div>
          </form>
        </div>
    </div>
</template>

<script>
import { server } from "../../utils/helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      news: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getNews();
  },
  methods: {
    editNews() {
      let newsData = {
        title: this.news.title,
        description: this.news.description,
        body: this.news.body,
        author: this.news.author,
        date_posted: this.news.date_posted
      };
      axios
        .put(`${server.baseURL}/news/edit?newsID=${this.id}`, newsData)
        .then(() => {
          router.push({ name: "home" });
        });
    },
    getNews() {
      axios
        .get(`${server.baseURL}/news/news/${this.id}`)
        .then(data => (this.news = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>