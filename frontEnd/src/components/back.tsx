import { VscArrowLeft } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function Back() {
    return (
        <div className="bg-white w-full shadow-lg rounded-lg p-6">
            <Link to="/">
                <h3 className="font-bold text-sm generic-flex text-my-black"><VscArrowLeft/> Back</h3>
            </Link>
        </div>
    )
}
