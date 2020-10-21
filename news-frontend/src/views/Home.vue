<template>
    <div style="padding: 25px 0;">
      <div class="text-center">
        <h2>News Page application built with <b><i style="color: crimson;">NestJS</i></b> and <b><i style="color: chartreuse">VueJS</i></b></h2>
       <p style="padding-bottom: 20px;"><b><i>This is my <b style="font-size: 1.2rem; color: indianred;">first</b> framework application</i></b></p>
       <div v-if="allNews.length === 0">
            <h4> No news found at the moment &#128549;</h4>
        </div>
      </div>
        <div class="row">
           <div class="col-md-4" v-for="news in allNews" :key="news._id">
              <div class="card mb-4">
                <div class="card-body">
                   <h2 class="card-img-top">{{ news.title }}</h2>
                   <h5 class="card-subtitle mb-2 text-muted">{{ news.description }}</h5>
                  <p class="card-text" style="padding-top: 10px; text-overflow: ellipsis; white-space: nowrap; overflow:hidden;">{{ news.body }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group" style="margin: 8px 0;">
                      <router-link :to="{name: 'News', params: {id: news._id}}" class="btn btn-sm btn-primary"><b>View post</b></router-link>
                      <router-link :to="{name: 'Edit', params: {id: news._id}}" class="btn btn-sm btn-warning"><b>Edit post</b></router-link>
                      <button class="btn btn-sm btn-danger" v-on:click="deleteNews(news._id)"><b>Delete post</b></button>
                    </div>
                  </div>
                  </div>
                  <div class="card-footer text-muted">
                    <small class="text-muted"><b>Posted on: {{ news.date_posted}}</b></small><br/>
                    <small class="text-muted"><b>by: {{ news.author}}</b></small>
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
    },
  }
};
</script>