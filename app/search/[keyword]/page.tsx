import Header from "@/components/Animelist/Header"
import Animelist from "@/components/Animelist"


const Page = async ({params}) => {
    const {keyword} = await params
    const decodedKeyword = decodeURIComponent(keyword)
    const data = await fetch(`https://api.jikan.moe/v4/anime?q=${decodedKeyword}`)
    const searchAnime = await data.json()
    return (
        <div className="space-y-14">
        <section>
            <div className="space-y-4">
            <Header title={`pencarian untuk ${decodedKeyword}`} linkHerf={undefined} linkTitle={undefined} />
            <Animelist api={searchAnime} />
            </div>
        </section>
        </div>
    )
}
export default Page
