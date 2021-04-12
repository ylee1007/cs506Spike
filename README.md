# CS506 SpikeExercise
PROJECT GOALS:
Create an informative and interactive system that shares information about you and your friends. This system should use a programming language/environment agreed upon by your team – but the actual development should be completed by individually. This can be a mobile application or a web- based system; both need some form of database connectivity.

1. Create an account.
2. Log in with a valid username and password.
3. Logout and allow other users to log in.
4. Update profile information (username, password, and all the information displayed on the various tabs/button/delineations within the system).
5. (Extra Credit - Stretch Goals): Share your profile with other users in the system; create friend lists; allow friends to suggest edits to the “All About Me” system content.
6. (Extra Credit – Stretch Goals): Upload and store pictures in the system database.

MongoDB, Node.js, HTML, CSS

// run
npm run watch

## Spike Exercise Journal

### Jornal 1
2/14 Step1
After submitting requirement and specification document, I had talked with our group about the spike exercise. We talked about the language that we want to use and framework. We decided to use Javascript using Node.js, bootstrap for frontend styling. According to the description of spike exercise, I need to create simple web application that has login and profile features and have some pages that listed to description. With the experience of completing the requirement and specification, I thought it would be nice to draw the diagram. I draw the diagram using creately application.
![image](https://user-images.githubusercontent.com/48008528/114336911-fbf71c00-9b8a-11eb-92c2-1b26c2815f29.png)

### Jornal 2
2/15 Step2
I research about how to connect backend, frontend, and database. And, below architectural diagram was helpful start thinking about the design. I don’t have experience with full stack developing. Therefore, it was confused about controller, model, and view concept.
![image](https://user-images.githubusercontent.com/48008528/114336993-2943ca00-9b8b-11eb-884e-f115b5479934.png)

<Diagram link: http://oniwebblog.blogspot.com/2016/01/general-crud-application-using.html>
Furthermore, I learned about express. Node.js with express would be the backend.

### Jornal 3
2/16 Step3
I start the installation part to actually start to coding process. I realized that there are lots of components to install to build the web application. I need to install Node.js, npm, and mongoDB alter (I decide to use alter instead of local storage because one of the articles said that, for small application, alter would be more applicable to use). I will say installation was very difficult. I hope coding part would be more interesting than this process. I am kind of tanksful that I can experience this tedious installation work before our actual group project.
Node has npm in there, but I had difficulty on upgrading npm which related with access denied problem. I think a lot of access problem occur in mac OS. I think it has conflict with npm that I installed before, but I resolved it after struggling for an hour. Also, I learned more about my folder location such as “usr/local” which was outside of yewon folder. Change the location of global package for npm was challenge. I made it global and add path. Furthermore, I learned about homebrew to download the MongoDB. I spent about 4 hours just installing…

### Jornal 4
2/17 Step 4
I again found another problem with after Mac OS upgrading to Catalina. I think they need to figure something out about this. Also, I learned about express which is web application framework for Node.js. I generated folder using WebStorm run with npm view in terminal with basic JavaScript code. I could see “Hello Word”. I try to initially connect with git and commit it. However, I had so much trouble with it. I think it had conflict with the git repository I created from GitHub website and the project folder itself. Therefore, I delete the previous project folder. Then, I first clone the repository then do all setting process again then commit it push to repository. And, it worked well!!!

### Jornal 5
2/18 Step 5
I did not image it would that this much time to just installing components. I tried to use basic template with Pug. I defined the template file and tell our routes to use them. Also, I defined the layout folder for Pug. Pug would be helpful to develop and make me to avoid tedious html style. However, I need to learn more about Pug styling. Also, I realized there are many npm packages that I could use to build webpage.

### Jornal 6
2/19 Step 6
I had problem that node function does not recognized by WebStorm. However, after research, I learned that I need to add plugin to recognize the node.js
Post and get method don’t work but figured out it is WebStorm IDE problem. Link is below.
https://intellij-support.jetbrains.com/hc/en-us/community/posts/360001875360--Solved-Nodejs-Express-Unresolved-function-or-method
I learned more about request and respond object in Express. Also, I think about validation while user register. I again spent so much to connect the database. I never use mongoDB before, and it was super hard to figure it how. I also found that after mongoDB got updated, some of the information in internet is wrong because it is out of date. Below link was helpful to fix the connection problem. I failed several time to put login information, but after many research, I succeed it. 
https://stackoverflow.com/questions/47662220/db-collection-is-not-a-function-when-using-mongoclient-v3-0

### Jornal 7
2/20 Step 7
Now I can log in and sign up smoothly. However, I need to figure out that how to put more profile information to database. Also, I notice that there is problem to use MongoDB in remote way. I need to research more about it. I add several pages, such as favorite food, about me and class pages on navigation bar. I really like using bootstrap.
