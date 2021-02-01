# Petful Server

This app was created to showcase using a queue by creating a "line" of people and pets. For the people routes there is a single queue. There are endpoints to retrieve this queque and enqueues a person. For the pets routes there are two queues, one for dogs, and one for cats. There is one route to retrieve both queues and another to dequeue the specified type of pet AND dequeues from the people list.

These are the endpoints:

- all endpoints are prefixed with /api

* /people
  - GET to get all from people queue
  - POST to enqueue a person
    - requires body of persons name to enqueue { "name": "name }
* /pets
  - GET to get both Cats and Dogs queues
  - DELETE to dequeue a pet of the specified type AND dequeue from People
    - requires body w/ pet type to delete { "petType": ("cats" OR "dogs") }

### This app was created with:

<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
<img align="left" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img align="left" alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img align="left" alt="ExpressJS" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
<img align="left" alt="Heroku" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
