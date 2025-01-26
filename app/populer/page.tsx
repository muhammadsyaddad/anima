"use client"
import Pagination from "@/components/Utilities/Pagination"
import Header_menu from "@/components/Utilities/Header_menu"
import { useEffect, useState } from "react"
import AnimeList from "@/components/Animelist"
import { getAnimeRespond } from "../libs/api-libs"
const Page =  () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])
    const fecthData = async () => {
        // const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`)
        // const data = await response.json()

        const data = await getAnimeRespond("top/anime", `page=${page}`)
        setTopAnime(data)
    }

    useEffect(() => {
        fecthData()
    }, [page])
    return (
        <>
        <Header_menu title={"ANIME POPULER"}/>
        <AnimeList api={topAnime}/>
        <Pagination page={page} lastpage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        </>
    )
}       

export default Page
        