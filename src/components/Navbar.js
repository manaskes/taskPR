import { Menu } from "lucide-react";

export default function Navbar({ onMenuClick }) {
    return (
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-md">
            <div className="md:hidden">
                <Menu onClick={onMenuClick} className="h-6 w-6 cursor-pointer text-white" />
            </div>
            Securing Your Flutter App: Best Practices and Techniques
        </nav>
    );
}
