import Smartstick from "./index.js";
const server = new Smartstick();

server.listen(8080, () => {

    console.log(`Listening on port ${8080}`);

})