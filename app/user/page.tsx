import { GetServerSideProps } from "next";
import { User } from "firebase/auth";
import { getUser } from "@/actions/get-user";

interface UserPageProps {
    user: User | null;
    error?: string;
}

const UserPage = ({ user, error }: UserPageProps) => {
    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!user) {
        return <div>Redirecting...</div>; // Mostra un messaggio di redirect
    }

    return (
        <div>
            <h1>Welcome, {user.email}!</h1>
            {/* Add user page content */}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const user = await getUser();
        if (!user) {
            return {
                redirect: {
                    destination: "/signin",
                    permanent: false,
                },
            };
        }
        return {
            props: {
                user,
            },
        };
    } catch (error) {
        return {
            props: {
                user: null,
                error: 'An error occurred while fetching user data.',
            },
        };
    }
};

export default UserPage;
