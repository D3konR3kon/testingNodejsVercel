//import modules
const express = require('express');
const cors = require('cors')

const app = express();
app.set('port', process.env.PORT || 8000) 
//const corsOption = {
    //origin: 'http://localhost:8010'
//}


app.use(cors()) //app.use(cors())

app.use(express.json())// app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
    res.send('<h1>Hello world<h1>');
})



//stting port to connect to



app.listen(app.get('port'), () => {
    console.info(`Server listen on port ${app.get('port')}`);
})