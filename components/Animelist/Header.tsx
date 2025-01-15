import Link from "next/link"

const Header = ({title, linkHerf, linkTitle}) => {
    return (
        <div className="flex justify-between ">
            <h1 className="font-medium text-xl ">{title}</h1>
            {
                linkHerf && linkTitle ? 
                <Link href={linkHerf} className=" bg-red-600 font-light text-white text-xs px-2 py-1 rounded-md">{linkTitle}</Link>
                : null
            }
        </div>
    );
}

export default Header