const app = require('express')(); //App is the API we're building
//Import the Express package, brackets to intialise it
const PORT = 8080; //Defined endpoint for the API

//Listen will fire up the API, listen on a port
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
//Optional callback to let us know when it's ready
)