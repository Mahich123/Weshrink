import { authClient } from "@/lib/auth-client";

export default function useAuth() {
    const {data: session, isPending} = authClient.useSession();

    const signOut = async () => {
        try {
            await authClient.signOut();
            window.location.href = '/';
        } catch (error) {
            console.error('Sign out error:', error);
        }
    }

    return {
        session,
        isPending,
        signOut
    }
}