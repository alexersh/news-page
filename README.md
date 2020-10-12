# Build a news page using Nest.js, Vue.js and MongoDB

Application repo for a simple news page application built with Nest.js, Vue.js and MongoDB.

## Getting Started
This prototype is divided into two separate sections. Namely the Backend ( Built with Nest.js) and the frontend
( Built with Vue.js ).

### Clone the repository
To easily set up the application, clone this repository which contains directory for both sections of the project ( i.e `news-backend` and `news-frontend`)

```bash
git clone https://github.com/alexersh/news-page.git
```

## Change directory into the newly cloned project
```bash
cd news-page
```

## Backend
### Change directory into the backend
```bash
cd news-backend
```

### Install backend dependencies

```bash
npm install
```

### MongoDB
Ensure that you have [mongoDB](https://www.mongodb.com/products/compass) installed on your machine before running the application. I have this fully setup on my mac already.

Start mongoDB:

```bash
sudo mongod
```

### Run the application
Open another terminal and still within the `news-backend` project directory run the application with:

```bash
npm run start:dev
```

This will start the backend application on port `3000`.

## Frontend
Open another terminal from the `news-page` and navigate to the `news-frontend` folder to setup the frontend

### Frontend dependencies
```bash
cd news-frontend
npm install
```

### Run the frontend app

```bash
npm run serve
```

### Test the application
Finally open your browser and view the application on http://localhost:8080

## Prerequisites
 [Node.js](https://nodejs.org/en/), [Npm](https://www.npmjs.com/), [MongoDB](https://docs.mongodb.com/v3.2/installation/)

## Built With
[Nest.js](https://nestjs.com/)
[Vue.js](https://vuejs.org/)
[MongoDB](https://www.mongodb.com/) 
