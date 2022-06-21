# ANNOUCEMENT: VERSION 2 IS COMING SOON!

- Repo is available as well as the deployed version. It is definitely a work in progress but it allows teacher-student direct relationship. Includes features such as live chat, dark mode, and more. =)

# MY-PORTAL

- Academic tool that helps students to keep track of classes, grades, and assignments in an easy, no non-sense way.

[live-heroku]: (https://testing-portal-api.herokuapp.com/)

# TECH/TOOLS

[FRONTEND]: React with CRA along with Redux for state management, and axios for HTTP request

[BACKEND]: NodeJS with Express for the server

[DATABASE]: MongoDB via mongoose and MongoDB-Atlas

[HASH-SALT]: BCRYPT for hashing and salting student's info

# STEPS

[1]- Download the doc and run npm install to install all the dependencies
[2]- Use node server/index.js to run the server/ alternatively use nodemon
[3]- On a different terminal, cd client and run npm start

# TEST CREDENTIALS:

studentId: 123456
password: 123456

# THE IDEA:

[OH_THE_PANDEMIC]

- During the pandemic when kids were virtually schooled, I has the opportunity to experience what my teenager son goes through in this new gen of education.

- For the most part, there are no texts books anymore like back when I was his age. Everything is now online and through the school's website.

[NO_HOMEWORK_DONE]

- Observing my son's lack of motivation to stay focused and organized, I decided to investigate further and asked him to get into the school portal: Where classes, grades and assignments are displayed.

- After observing the literal headache it was, traveling from page to page to page to finally end-up in a very clumsy personal agenda, I understood his struggles better.

[THE_SOLUTION]

- If using a paper agenda is a 'no-go' for kids nowadays (as he told me), then why not an app that's simple and easy to use while accomplishing the goal of helping to stay on track?

# THE APPROACH

[ROOT]:

- The user will be met with a login or register page

- Register process sends request to the server who checks if entry is already present in the Database to prevent duplicates

- Register also allows for creation of new account in case no studentId nor email is found in the Database

- The passoword created with hashed and salted with bcrypt and upon succeessfully created account, the user is automatically logged-in

- Loggin in triggers a bcrypt comparison on the server to ensure credentials are valid

- Once logged in the user is presented with an aside containing the classes (if any) where they can add more classes on click on a class to show the classes specifics on the section next to it

- The section will show that particular class details, such as assignments and grade

- The user has the opportunity to add new assignments, mark them completed, or delete them, as well as alter the current grade

- The user also can click on completed which opens a modal displaying a list of assignments that were marked completed

- On the completed section, the user has the ability to clear the list

- To avoid multiple requests to the server, the new user information gets sent to the backend for database update only when 'logout' is clicked

[PRIORITY_LIST]

- Mobile design lacks 'ease-of-use'

- It will be completely redesigned so the user is met (upon login) with the aside element, and when clicks a class, a modal pops with the specific info, rather than having to scroll down.

- the rest will likely remain the same.

- I intend to run tests and see if sending requests to the backend upon info alteration will impact the app performance. If able to compromise, I will go that route to avoid the need to 'log-out' in order to persist new data.

[V-2]

- This app will have a second version that will provide it with less of a personal-agenda character and more like a teacher-student communication platform

- The app will have a student segment and a teacher segment

- The teacher registers themselves and add assignments and grades

- The student will sign up to classes available from the database.

- The student will then have his assignments being a list of the teachers assigned tasks

- Marking complete will function as 'turning in' the assignment and await for teachers grading

- Overall the concept is the same with a more extensive use of database

[ARYSE_TANSY]: Self-taught full-stack web developer on a life-long journey of learning and applying new skills.
