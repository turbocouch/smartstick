import * as http from "http";

export default class Smartstick {

    server:http.Server;

    constructor() {

        this.server = http.createServer(this.runServer);

    }

    runServer(req, res) {

        res.write("This is a test.");
        res.end();

    }

    listen(port, callback) {

        
        this.server.listen(port, callback);

    }

}
