import dotenv from 'dotenv';
import app from './blog';
dotenv.config();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`http://localhost:${port}/api`);
});
