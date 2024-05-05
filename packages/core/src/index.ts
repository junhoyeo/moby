import { createABCIServer } from '@moby/abci';

// console.log(abci);
var appServer = createABCIServer();
appServer.listen(26658);
