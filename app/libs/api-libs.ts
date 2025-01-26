export const getAnimeRespond = async (resource, query) => {
    const response = await fetch(`https://api.jikan.moe/v4/${resource}?${query}`)
    const data = await response?.json()
    return data
}