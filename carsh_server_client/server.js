const http = require('http');
const fs = require('fs');

const server = http.createServer((request, res) => {


    // res.setHeader('Content-Type', 'text/html');

    fs.readFile('./views/index.html', (err, data) => {

        if (err) {

            console.log(err);
            res.end()
        }

        else {


            res.end(data);
            console.log('response send');

        }
    })


});


server.listen(3000, 'localhost', () => {

    console.log('listening to port 3000');
});