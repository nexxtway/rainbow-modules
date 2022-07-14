import { getAuth as fbGetAuth } from 'firebase/auth';

export default function getAuth(app) {
    return app && app.auth ? app.auth() : fbGetAuth(app);
}
