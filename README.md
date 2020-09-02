# Job-Groups
Job-Groups was originally a Hackathon Idea that we decided to create as practice to learn Fullstack Development. 
It is job tracking application where a user can share jobs with other users in the same group. 
The Frontend is built with React, Redux, and TailwindCSS, while the Backend is built with Node, Express, and MongoDB

<br/>
Homescreen
<br/>
<img src="https://user-images.githubusercontent.com/19595312/91919467-1895b200-ec94-11ea-99a4-8e3b29971573.png"/>

<br/>
After the user signs in with Google
<br/>
<img src="https://user-images.githubusercontent.com/19595312/91919471-1b90a280-ec94-11ea-9487-a9de0756fd8f.png"/>

<br/>
After the user creates a group and adds job postings to it.
<br/>
<img src="https://user-images.githubusercontent.com/19595312/91919477-1e8b9300-ec94-11ea-92f4-40135d723797.png"/>

## Installation
In the both the backend and frontend folders, run `npm install`. Inside of `backend/config` a file named `dev.js` must be placed with the following
```
module.exports = {
    mongoURI: 'mongodb://127.0.0.1:27017/job_groups',
    googleClientID:
        '<Google client id>',
    googleClientSecret: '<Google client secret>',
    cookieKey: '<StringForHashing>',
};
```

## Usage
Inside of the backend run `npm run server` to start the server. Note MongoDB should be running. <br/>
Inside of the frontend folder run `npm start` to start the client
