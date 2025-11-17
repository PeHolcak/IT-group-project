import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react";

export const AdminOnly = ({ children }: PropsWithChildren) => {
    const { data } = useSession();

    if (data?.user?.role !== "admin") {
        return <p>Nemáš oprávnění.</p>;
    }

    return <div>{children}</div>;
};
