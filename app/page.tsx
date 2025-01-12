
import Animelist from "@/components/Animelist"
import Link from "next/link"


const  Home = async () => {
  const data =  await fetch ('https://api.jikan.moe/v4/top/anime?limit=18')
  const posts = await data.json()
  return(
    <div className="space-y-4">
      <div className="flex justify-between ">
        <h1 className="font-medium text-xl ">POPULER</h1>
        <Link href="/popular" className=" bg-red-600 font-light text-white text-xs px-2 py-1 rounded-md">lihat semua</Link>
      </div>
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-3 gap-4">
        {posts.data.map((data) => (
            <div key={data.mal_id}>
              <Animelist title={data.title} images={data.images.webp.image_url} id={data.mal_id}/>
            </div>
        ))}
      </div>
    </div>
  )
}
export default  Home
