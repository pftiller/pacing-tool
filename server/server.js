let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//Port
const port = 3000;

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Serve static files
app.use(express.static('server/public'));

app.listen(port, ()=> {
    console.log('Listening on port:', port);
})