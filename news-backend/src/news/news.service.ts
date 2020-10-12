import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './interfaces/news.interface';
import { CreateNewsDTO } from './dto/create-news.dto';

@Injectable()
export class NewsService {

    constructor(@InjectModel('News') private readonly newsModel: Model<News>) { }

    async getAllNews(): Promise<News[]> {
        const allNews = await this.newsModel.find().exec();
        return allNews;
    }

    async getNews(newsID): Promise<News> {
        const news = await this.newsModel.findById(newsID).exec();
        return news;
    }

    async addNews(createNewsDTO: CreateNewsDTO): Promise<News> {
        const newNews = await this.newsModel(createNewsDTO);
        return newNews.save();
    }

    async editNews(newsID, createNewsDTO: CreateNewsDTO): Promise<News> {
        const editedNews= await this.newsModel.findByIdAndUpdate(newsID, createNewsDTO, { new: true });
        return editedNews;
    }

    async deleteNews(newsID): Promise<any> {
        const deletedNews = await this.newsModel.findByIdAndRemove(newsID);
        return deletedNews;
    }

}