const express = require('express'); 
const app = express();
//App is the API we're building
//Import the Express package, brackets to intialise it
const PORT = 8080; //Defined endpoint for the API

app.use( express.json() ) //middleware to make request go through, 
//converting body to JSON to make it available in our POST callback

//Listen will fire up the API, listen on a port
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
//Optional callback to let us know when it's ready
)


/* This is an endpoint you're setting up where the tshirt is.

If you just had the first arg before the comma, would set up our
server with that endpoint. We then have to handle a request to it.
Which we do by adding in the callback (the 2nd arg) which will fire.
This response function gives access to two objects, request, response */

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'tshirt',
        size: 'large'
    })
    
});

/* This is another endpoint.

This has a route parameter, captures dynamic values in the URL. The ID
of the tshirt, there may be millions on this API.
Post is creating new info, so new tshirt in this case.
Req allows us to access the info in the request.

*/
app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt: `tshirt with your ${logo} and ID of ${id}`,
    });

});
