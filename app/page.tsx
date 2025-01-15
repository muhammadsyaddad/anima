import Header from "@/components/Animelist/Header"
import Animelist from "@/components/Animelist"
import Link from "next/link"


const Home = async () => {
  const data = await fetch('https://api.jikan.moe/v4/top/anime?limit=18')
  const topAnime = await data.json()
  return (
    <div className="space-y-14">
      <section>
        <div className="space-y-4">
          <Header title="TOP ANIME" linkHerf="/populer" linkTitle="See All" />
          <Animelist api={topAnime} />
        </div>
      </section>
      <section>
        <div className="space-y-4">
          <Header title="TOP ANIME" linkHerf="/populer" linkTitle="See All" />
          <Animelist api={topAnime} />
        </div>
      </section>
    </div>
  )
}
export default Home
