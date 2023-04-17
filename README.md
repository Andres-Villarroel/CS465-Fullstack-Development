# CS465-Fullstack-Development

## Architecture

### Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

Initially, the project started out with using basic HTML to build the skeletal structure. It was Limiting and time consuming as there was much to be hard coded in order to achieve some basic functionality. By the end of the project, the architecture of the project switched to a MEAN approach which was difficult at first as it needed more time to understand the concepts but it did make development easier while creating some complex features such as implmenting a Single-Page-Application using the Angular.js framework; no doubt it was faster to use Angular.js than to achieve the same result with JavaScript on my own. The basic approach that was used at first was easy to learn and straightforward but the sohpisticated frameworks used to finish the project made the entire development process easier overall. 

### Why did the backend use a NoSQL MongoDB database?

A NoSQL MongoDB database has the advantage of being horizontally scalable and is document-based instead of table-based like SQL databases are. This means that the NoSQL MongoDB database can easily grow at a large scale should the application grows in popularity and people use it more often.


## Functionality 

### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is a data storing format which helps store and move data across different applications and for different purposes. Javascript is a powerful programming language and can utilize the JSON format to use data. JSON can be used in either front or backend development since both use data and JSON is a highly supported format for transporting and moving it. On the front end, users can interact with the UI such as typing in their username, password, address, etc in addition to other forms of user input such as storing their answers in an online exam. The user's data would be difficult for the rest of the application to process but it JSON format, the application can read and use it. The backend can utilize JSON by receiving it, processing it, and storing it into a database for long-term storage.  

### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

Initially, the project application only had a basic website established which looked fine as is but it was then converted into a SPA for a better user experience by offering a fast browsing experience at the cost of a slow intial load. Most of the project had repeated HTML code that could have been reduced for a more efficient developing process and better reusability. Handlebars was used to accomplish this task which helped make adding more pages much easier in the future should the need ever arise. The reusability of the UI components can substantially improve the development process by making it simple to expand the application with less chances of error. 

## Testing

### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Methods perform repeated tasks in a reusable form when called in an application. For example, a method could be made to be called to execute a series of actions that must be taken when authenticating a user in a website with login capabilities. The user would submit their login credentials and the method would take them to be verified by checking if the application's database contains those same credentials. Since the front end of the application cannot directly access the database as that would be a serious security risk, an API is set up and used which contains methods to access the database on behalf of others in a sercure manner. When the front end's user verification method calls the backend's API method for checking if the provided credentials is found in the database, it must wait for a response. Where the two methods interact is considered an endpoint; endpoints help establish secure channels of communication only for authenticated users. Security is vital for a fullstack application as a poorly implemented system can cause and unauthorized breach of data leading to possibly irreparable damage. 

## Reflection

### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has taught me a topic that I have always wondered about since the start of my journey in learning about computer science and software development. I aim to be a software developer and this class provided a unique opportunity to know what some aspects of the job are like during the development aspect of the job. Over the years, I gained new skills to assist me for when I get a job such as planning ahead, useful development practices (test often and break down complicated tasks into more manageable ones), and basic secure concepts like user authentication and data encryption. This course has allowed me to practice those skills in one project to demonstrate how it comes together. The experience I gained from this project and course helps me improve my skills and gain worth in the competitive job market.  
