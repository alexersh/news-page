import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDTO } from './dto/create-news.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';


@Controller('news')
export class NewsController {

    constructor(private newsService: NewsService) { }

    @Get('allNews')
    async getAllNews(@Res() res) {
        const allNews = await this.newsService.getAllNews();
        return res.status(HttpStatus.OK).json(allNews);
    }

    @Get('news/:newsID')
    async getNews(@Res() res, @Param('newsID', new ValidateObjectId()) newsID) {
        const news = await this.newsService.getNews(newsID);
        if (!news) throw new NotFoundException('News does not exist!');
        return res.status(HttpStatus.OK).json(news);
    }

    @Post('/news')
    async addNews(@Res() res, @Body() createNewsDTO: CreateNewsDTO) {
        const newNews = await this.newsService.addNews(createNewsDTO);
        return res.status(HttpStatus.OK).json({
            message: "News has been submitted successfully!",
            news: newNews
        })
    }

    @Put('/edit')
    async editNews( @Res() res, @Query('newsID', new ValidateObjectId()) newsID, @Body() createNewsDTO: CreateNewsDTO) {
        const editedNews = await this.newsService.editNews(newsID, createNewsDTO);
        if (!editedNews) throw new NotFoundException('News does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'News has been successfully updated',
            news: editedNews
        })
    }

    @Delete('/delete')
    async deleteNews(@Res() res, @Query('newsID', new ValidateObjectId()) newsID) {
        const deletedNews = await this.newsService.deleteNews(newsID);
        if (!deletedNews) throw new NotFoundException('News does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'News has been deleted!',
            news: deletedNews
        })
    }
}