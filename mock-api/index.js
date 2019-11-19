const express = require('express')
const app = express()
const uuidv4 = require('uuid/v4')

// GET /
app.get('/', (req, res) => {
    res.send('Hello World ' + JSON.stringify(req.params))
})

// GET /users/:userId/activity-definitions
const activityDefinitions = {
    data: [{
        id: uuidv4(),
        team: {
            id: uuidv4(),
            name: "Sales"
        },
        name: "Book meeting",
        activityDefinitionId: uuidv4(),
        commitment: 2.0,                // nice to have
        achievement: 1.0,               // nice to have
        migDayOfWeek: "MONDAY"          // very nice to have
    }]
}
app.get('/users/:userId/activity-definitions', function(req, res) {
    res.send(activityDefinitions)
})

// GET /users/:userId/activity-definitions/:activityDefinitionId/properties
const activityDefinitionProperties = {
    data: [{
        activityDefinitionPropertyId: uuidv4(),
        metricId: uuidv4(), // not entirely sure that this is needed
        type: "integer", // integer, decimal, string
        label: "How many meetings did you book?",
        placeholder: "Input number of meetings booked"
    }, {
        activityDefinitionPropertyId: uuidv4(),
        metricId: uuidv4(), // not entirely sure that this is needed
        type: "string", // integer, decimal, string
        label: "Which company and who at the company did you book?",
        placeholder: ""
    }]
}

app.get('/users/:userId/activity-definitions/:activityDefinitionId/properties', function(req, res) {
    res.send(activityDefinitionProperties)
})


// POST /users/:userId/activity-definitions/:activityDefinitionId/report
// [PAYLOAD]
// {
//     data: {
//             properties: [{
//             activityDefinitionPropertyId: uuidv4()",
//             value: 2.0
//         }, {
//             activityDefinitionPropertyId: uuidv4()",
//             value: "Booked meeting with Acme AB CEO"
//         }]
//         }
// }
const activityReportResponse = { status: 201, message: 'Activity report saved.' }

app.post('/users/:userId/activity-definitions/:activityDefinitionId/report', function(req, res) {
    res.send(JSON.stringify(activityReportResponse))
})

console.log('Listening on http://localhost:3000')
app.listen(3001)