<template>
  <div>
    <h4 class="text-center" style="margin: 30px 0;"><small><button class="btn btn-info" v-on:click="navigate()"><b>View all news</b></button></small></h4>
    <div class="card">
      <h3 class="card-header">
        {{ news.title }}
      </h3>
        <div class="card-body">
        <h4 class="card-title">{{ news.description }}</h4>
        <p class="card-text">{{ news.body }}</p>
      </div>
      <div class="card-footer text-muted">
        <i>Posted by {{news.author}}, {{news.date_posted}}.</i>
      </div>
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