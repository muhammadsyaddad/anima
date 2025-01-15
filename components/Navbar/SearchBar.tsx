"use client"
import { FaMagnifyingGlass } from "react-icons/fa6"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const SearchBar = () => {
    // Initialize ref with null, and type it as HTMLInputElement or null
    const searchRef = useRef<HTMLInputElement | null>(null)
    const router = useRouter()

    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
        // Narrowing down the event type to KeyboardEvent or MouseEvent
        if ('key' in event) {  // This checks if the event is a KeyboardEvent
            // Handle Enter key press
            if (event.key === 'Enter') {
                const query = searchRef.current?.value.trim() // Using optional chaining to safely access .value
                if (query) {
                    event.preventDefault()
                    router.push(`/search/${query}`)
                }
            }
        } else if (event.type === 'click') {
            // Handle click event
            const query = searchRef.current?.value.trim() // Using optional chaining to safely access .value
            if (query) {
                event.preventDefault()
                router.push(`/search/${query}`)
            }
        }
    }

    return (
        <div className="relative text-black">
            <input
                placeholder="search ..."
                className="w-full h-full p-1 px-3 rounded-md"
                style={{ fontSize: '14px' }}
                ref={searchRef} // Attach the ref to the input
                onKeyDown={handleSearch} // Handle Enter key press
            />
            <button
                className="absolute top-3 end-2"
                onClick={handleSearch} // Handle button click
            >
                <FaMagnifyingGlass color="black" />
            </button>
        </div>
    )
}

export default SearchBar
