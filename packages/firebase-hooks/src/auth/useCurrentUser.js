import useAuth from './useAuth';

export default function useCurrentUser() {
    const auth = useAuth();
    if (auth) {
        return auth.currentUser;
    }
    return null;
}
