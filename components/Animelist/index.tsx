import Image from "next/image"
import Link from "next/link"
const AnimeList = ({title,images,id}) => {
    return(
        <Link href={`/animelist/${id}`} className="space-y-2">
            <Image  src={images} alt = "..." width={350} height={350} className="w-full max-h-[287px] object-cover"/>
            <h3 className="font-medium">{title}</h3>
        </Link>
    )
}
export default AnimeList