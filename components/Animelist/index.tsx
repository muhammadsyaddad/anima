import Image from "next/image"
import Link from "next/link"
const AnimeList = ({api}) => {
    
    return(
        <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-3 gap-5">
            {api.data?.map((anime, index) => (
                
                <Link href={`/anime/${anime.mal_id}`} className="space-y-2" key={index}>
                    <div className="w-full max-h-[287px] ">
                        <Image  src={anime.images.webp.image_url} alt = "..." width={350} height={287}  className="w-full h-full object-cover"/>
                    </div>
                    <h3 className="font-medium ">{anime.title}</h3>
                </Link>
            ))}
            
        </div>
    )
}
export default AnimeList

