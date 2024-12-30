import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="between-flex he-foo">
            <Link to="/">
                <h1 className="font-playwrite font-bold text-2xl text-my-black">Task manager</h1>
            </Link>
            <Link to="/task/create">
                <button type="submit" className="bg-my-black text-my-yellow border-2 border-my-black p-2 rounded-md generic-flex">
                    <IoAdd size={24} />
                    <span className="hidden lg:block">Add task</span>
                </button>
            </Link>
        </header>
    )
}
