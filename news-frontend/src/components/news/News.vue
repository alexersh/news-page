<template>
    <div class="text-center">
        <div class="col-sm-12">
      <h4 style="margin-top: 30px;"><small><button class="btn btn-success" v-on:click="navigate()"> View All News </button></small></h4>
      <hr>
      <h2>{{ news.title }}</h2>
      <h4>{{ news.description }}</h4>
      <h6><span class="glyphicon glyphicon-time"></span> Posted by {{news.author}}, {{news.date_posted}}.</h6>
      <p> {{ news.body }} </p>
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