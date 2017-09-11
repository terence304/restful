'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: process.env.PORT || 8080
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {
        let jobj = {
            "testing": "hello world"
        }
        // return reply('hello world');
        return reply(jobj);
    }
});

// POST route
server.route({
    method: 'POST',
    path: '/api/v1/create/data',
    handler: function(request, reply) {
        let body = request.payload;
        console.log('body: ', body);
        return reply('').code(200);
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
