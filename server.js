const express = require('express')
const app = express()


app.get('/', (req,res) => {
    res.send({data: 'test data'})
})

const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Server up and running on port ${port}`)})