# Full-Stack-App-Task-Management

Github of the fullstack application:

https://github.com/George-Ma2/Full-Stack-App-Task-Management

Website of the fullstack application:

https://full-stack-app-task-management-frontend.onrender.com/

Note: be patient when loading the website. Render is a free deployment platform that uses very little CPU when there is little traPic so it might take a while to load. Aprox ~50sec.

Functionalities:
HomePage: User can choose to sign in and create a new user or login from a previously created user.

Sign In Page: User can sign in to create a new user. After successful sign in a popup will appear. Sign In page also has password handling to be at least 8 character long and include uppercase, lowercase and number.

LoginPage: After Sign In and new user has been created, users can log in to the application.

Inside the App: User can add task, edit task and delete task. It also has a log out button at the top left corner.

Logout: a popup will show and user will be redirected to the login page.

To run the application locally:
clone the repository to a local folder.

Install on your react project folder:
nvm install node
npm install react-router-dom

Install on your node js server project folder:
npm install express pg cors bcrypt express-session connect-pg-simple

To run your react app: 
move to directory of your react project and run npm start

To run the node js server:
move to the directory of your node js server and run node index.js
Optionally you can install and run nodemon to run the server.
