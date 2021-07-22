const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({ hi: 'there' })
})

// passed in from Heroku, or use default value of 4000
const PORT_NO = process.env.PORT || 4000
app.listen(PORT_NO)
