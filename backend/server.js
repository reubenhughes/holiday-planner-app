require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const holidayRoutes = require('./routes/holidays')
const travelRoutes = require('./routes/travels')
const accommodationRoutes = require('./routes/accommodations')
const activityRoutes = require('./routes/activities')
const poiRoutes = require('./routes/pois')
const taskRoutes = require('./routes/tasks')

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/holidays', holidayRoutes)
app.use('/api/holidays/travel', travelRoutes)
app.use('/api/holidays/accommodation', accommodationRoutes)
app.use('/api/holidays/activity', activityRoutes)
app.use('/api/holidays/poi', poiRoutes)
app.use('/api/holidays/task', taskRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('Connected to db and listening on port', process.env.PORT)
    })
    })
    .catch((error) => {
        console.log(error)
    })