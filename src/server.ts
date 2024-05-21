import mongoose from 'mongoose';
import app from './app';
import 'dotenv/config'

(
    async function () {

        try {

            await mongoose.connect(process.env.MONGODB_URL as string);
            console.log('Pinged your deployment. You successfully connected to MongoDB!');

            app.listen(5000, () => {
                console.log(`project-1 listening on port ${5000}`);
            });

        } catch (error) {
            console.log(error);
        }

    }
)();