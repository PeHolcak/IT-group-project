import { AdminOnly } from "@/components/AdminOnly"


const AdminPage = () => {
    return (
        <AdminOnly>
            <p>Admin sekce</p>
        </AdminOnly>
    )
}

export default AdminPage