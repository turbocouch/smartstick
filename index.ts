import * as http from "http";
import { URL } from "url";

export default class Smartstick {

    server:http.Server;
    host:string;

    constructor(host) {

        this.host = host;
        if (this.host == undefined) this.host = 'http://example.com';

        this.server = http.createServer((req, res) => { 
            
            this.runServer(this, req, res) 
        
        });

    }

    runServer(server, req, res) {

        let currentUrl = new URL(req.url, server.host);

        console.log(currentUrl.pathname);

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(currentUrl.pathname);
        res.end();

    }

    listen(port, callback) {

        this.server.listen(port, callback);

    }

}
