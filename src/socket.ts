import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'https://amazonisburning-6f8fe83a90dd.herokuapp.com';

export const socket = io(URL);
