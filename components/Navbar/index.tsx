
import Link from "next/link"
import SeacrhBar from "./SearchBar";

const Navbar = () => {
    return (
        <header className="bg-color-dark text-white">
            <div className="flex md:flex-row flex-col justify-between p-6">
                <Link  href="/" className="font-bold text-3xl">WEABOO</Link>
                <SeacrhBar/>
            </div>
            <hr className="border-gray-300 border-t-0.1" /> 
        </header>
    );
}
export default Navbar