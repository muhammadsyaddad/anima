import Header from "@/components/Animelist/Header"
import Animelist from "@/components/Animelist"
import { getAnimeRespond } from "@/app/libs/api-libs"


const Page = async ({params}) => {
    const {keyword} = await params
    const decodedKeyword = decodeURIComponent(keyword)

    const searchAnime2 = await getAnimeRespond("anime", `q=${decodedKeyword}`)


    return (
        <div className="space-y-14">
        <section>
            <div className="space-y-4">
            <Header title={`pencarian untuk ${decodedKeyword}`} linkHerf={undefined} linkTitle={undefined} />
            <Animelist api={searchAnime2} />
            </div>
        </section>
        </div>
    )
}
export default Page
