import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.SERVER_PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
