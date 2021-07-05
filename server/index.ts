import express from 'express';
import * as userCtrl from './controllers/userController'

const app: express.Application = express();
app.use(express.json())
const port = 4001;

//endpoints
app.get('/api/users', userCtrl.getUsers);
app.post('/api/createUser', userCtrl.createUser);
app.put('/api/updateUser/:id', userCtrl.updateUser);
app.delete('/api/deleteUser/:id', userCtrl.deleteUser);


app.listen(port, () => console.log(`server running on port ${port}`));