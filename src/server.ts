import app from './app';

(
    async function () {

        app.listen(5000, () => {
            console.log(`project-1 listening on port ${5000}`);
        });
    }
)();