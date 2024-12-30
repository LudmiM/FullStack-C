import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

export default function AppLayout() {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <ToastContainer />
            <Footer />
        </div>
    )
}
