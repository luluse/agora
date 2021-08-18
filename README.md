# Agora


## Server - backend code

#### Full Stack Social media app using REST API built with Node.JS in the backend and React.JS in the frontend. Database is MongoDB Atlas.


### Business Requirements
Our application named **Agora** will power a fullstack social media app that will allow our users to create and share posts, follow people, like posts and browse all posts on the timeline.

### Key features

- Mongo DB: create, update, delete our collections

- register and login autentication
- users router: get, update delete methods
- follow and unfollow users
- create posts, update, delete, like and dislike
- fetch all timeline posts

### Technical requirements
- express(node.js framework- server will run in there)
- mongoose(helps create mongo models)
- helmet(help make requests to server)
- morgan(login middleware)
- mongoDB Atlas
- bcrypt (hash passwords before saving it into db) 
- multer (to save images into server when user uploads an image)
- path (to direct images into public folder on server side)



### Setup

1. Clone down this repo locally.

2. Add .env file with ```MONGODB=``` varaible. Add your mongoDB URI to connect to your DB.

3. in the terminal, type ```npm i``` to install all npm packages.

4. Turn on server on local machine using ```nodemon index.js``` command. 

5. Server will run on port 8800. To change port number, go to ```index.js``` file.


