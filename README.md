# Social-Network-API
## [Description](#table-of-contents)

API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, the Mongoose ODM, and Moment.js to format timestamps. The seed data is created using Insomnia.

![Demo](./public/assets/SS.png)
- [Walkthrough Video Part 1](./public/assets/Walkthrough%20Video%20Part%20I.mp4)
- [Walkthrough Video Part 2](./public/assets/Walkthrough%20Video%20Part%20II.mp4)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [License](#license)
* [Contributing](#contributing)
* [Technologies](#technologies)
* [Questions](#questions)

## [Installation](#table-of-contents)

- Download or clone repository to use this application on local machine.
- `Node.js` and `MongoDB` is required to run the application
- To install necessary dependencies, navigate to the root directory and run the following command: `npm install`

## [Usage](#table-of-contents)
- After installation, run `npm start`.
- When the server is started, the Mongoose models are synched to the MongoDB database.
- Open MongoDB and connect to the MongoDB URI `mongodb://localhost:27017`. On the list of databases, select `socialnetDB` to see `thoughts` and `users` data.
- To create seed data and test the API routes, use [Insomnia](https://insomnia.rest/download). 

**USER**
- `GET` All Users route: http://localhost:3001/api/users
- `GET` User by Id: http://localhost:3001/api/users/:userId
- `POST` Create User route: http://localhost:3001/api/users 
- `PUT` Update User by Id route: http://localhost:3001/api/users/:userId
- `DELETE` Delete User by Id route: http://localhost:3001/api/users/:userId

**FRIENDS**
- `POST` Add friend to user's friend list: http://localhost:3001/api/users/:userId/friends/friendId
- `DELETE` Remove friend from a user's friend list: http://localhost:3001/api/users/:userId/friends/friendId

**THOUGHTS**
- `GET` All Thoughts: http://localhost:3001/api/thoughts
- `GET` Thought by Id: http://localhost:3001/api/thoughts/:thoughtId
- `POST` Create Thought: http://localhost:3001/api/thought 
- `PUT` Update Thought by Id: http://localhost:3001/api/thoughts/:thoughtId
- `DELETE` Delete Thought by Id: http://localhost:3001/api/thoughts/:thoughtId

**REACTIONS**
- `POST` Create Reaction: http://localhost:3001/api/thoughts/:thoughtId/reactions
- `DELETE` Remove Reaction: http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId

## [License](#table-of-contents)

The application is covered under the following license:
[ISC](https://choosealicense.com/licenses/isc)


## [Contributing](#table-of-contents)

For the moment this project does not accept contributions from third parties. Thank you for your interest.

## [Technologies](#table-of-contents)

This application was built with: 
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Insomnia](https://insomnia.rest/)
- [Moment.js](https://www.npmjs.com/package/moment)

## [Questions](#table-of-contents)

Please feel free to contact me using the following links:
* [GitHub: jcuetos97](https://github.com/jcuetos97)
* [Email: jcuetos97@gmail.com](mailto:jcuetos97@gmail.com)
* [LinkedIn: jcuetos97](https://www.linkedin.com/in/jcuetos97/)
* [Website: jcuetos97](https://jcuetos97.github.io/Web-Developer-Portfolio/)
  
