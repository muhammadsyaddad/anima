
import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-black text-white">
            <div className="flex md:flex-row flex-col justify-between p-4">
                <Link  href="/" className="font-bold text-2xl">WEABOO</Link>
                <input placeholder="seacrh ..." />
            </div>
        </header>
    );
}
export default Navbar