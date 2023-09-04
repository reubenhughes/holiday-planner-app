# holiday-planner-app

## Dependencies and installation order:
```
npm install express
npm install dotenv
npm install mongoose
npx create-react-app frontend
npm install react-router-dom
npm install date-fns
```

## Starting app:
To start backend: "npm run dev". To start frontend: "npm start".

## Creating database
### Setting up MongoDB
1. Create MongoDB Atlas account or log in to already existing account
2. Create a new project and then database, and add cluster to database
3. Connect to cluster with Node.js driver
4. Copy the uri string on line 2 for the .env file

### Creating .env file
Create a .env file in the backend folder and add the following code
```
PORT=4000
MONGO_URI=mongodb+srv://[username]:[password]@cluster0.ozjbaqv.mongodb.net/?retryWrites=true&w=majority
```
where [username] is your mongodb username and [password] is the password used for the holiday planner database. Don't include the square brackets.
