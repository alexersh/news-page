<template>
    <div>

      <div class="text-center">
        <h1>News Page built with NestJS and VueJS</h1>
       <p> This is my first framework application </p>

       <div v-if="allNews.length === 0">
            <h2> No news found at the moment </h2>
        </div>
      </div>
        <div class="row" style="width: 99%;">
           <div class="col-md-4" v-for="news in allNews" :key="news._id">
              <div class="card mb-4 shadow-sm" style="left: 20px">
                <div class="card-body">
                   <h2 class="card-img-top">{{ news.title }}</h2>
                   <h4 class="card-subtitle mb-2 text-muted">{{ news.description }}</h4>
                  <p class="card-text">{{ news.body }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group" style="margin-bottom: 20px;">
                      <router-link :to="{name: 'News', params: {id: news._id}}" class="btn btn-sm btn-outline-secondary">View News</router-link>
                       <router-link :to="{name: 'Edit', params: {id: news._id}}" class="btn btn-sm btn-outline-secondary">Edit News</router-link>
                       <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteNews(news._id)">Delete News</button>
                    </div>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Posted on: {{ news.date_posted}}</small><br/>
                    <small class="text-muted">by: {{ news.author}}</small>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { server } from "@/utils/helper";
import axios from "axios";
export default {
  data() {
    return {
      allNews: []
    };
  },
  created() {
    this.fetchNews();
  },
  methods: {  
    fetchNews() {
      axios
        .get(`${server.baseURL}/news/allNews`)
        .then(data => (this.allNews = data.data));
    },
    deleteNews(id) {
      axios.delete(`${server.baseURL}/news/delete?newsID=${id}`).then(data => {
        console.log(data);
        window.location.reload();
      });
    }
  }
};
</script>