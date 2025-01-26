
const Pagination = ({page, lastpage, setPage}) => {
    const scrollToTop = () => {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const handleNextPage = () =>{
        scrollToTop()
        if (page === lastpage) return
        setPage((praveState) => praveState + 1)
    }
    const handlePrevPage = () =>{
        scrollToTop()
        if (page === 1) return

        setPage((praveState) => praveState - 1)
        
    }
    return (
        <>
            <div className="flex justify-center items-center py-4 px-8 gap-4">
                <button onClick={handlePrevPage} className="text-sm transition-all hover:text-color-secondary">prev</button>
                <p className="text-sm" >{page} of {lastpage} </p>
                <button onClick={handleNextPage} className="text-sm transition-all hover:text-color-secondary">next</button>
            </div>
        </>
    )
}

export default Pagination