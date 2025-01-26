import Header from "@/components/Animelist/Header"
import Animelist from "@/components/Animelist"
import Link from "next/link"
import { getAnimeRespond } from "./libs/api-libs"


const Home = async () => {
  const topAnime = await getAnimeRespond("top/anime", 'limit=18')
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
