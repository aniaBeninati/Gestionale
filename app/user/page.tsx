import { getUser } from "@/actions/get-user";
import { User } from "firebase/auth";

interface UserPageProps {
    user: User | null;
    error?: string;
}

export default async function UserPage() {
    try {
        const user = await getUser();
        
        if (!user) {
            // Puoi gestire il reindirizzamento lato client
            return (
                <div>
                    Redirecting to SignIn...
                    {/* Reindirizzamento lato client */}
                </div>
            );
        }

        return (
            <div>
                <h1>Welcome, {user.email}!</h1>
                {/* Contenuto della pagina utente */}
            </div>
        );
    } catch (error) {
        return (
            <div className="error">
                An error occurred while fetching user data.
            </div>
        );
    }
}
