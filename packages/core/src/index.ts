import { createABCIServer } from '@moby/abci';

import { Application } from './app';

const app = new Application();
const server = createABCIServer(app);
server.listen(26658);
