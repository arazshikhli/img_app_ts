import { useState } from "react"

export const SearchComponent = ({ search }: { search: string }) => {
    const [searchValue, setSearchValue] = useState('')
    return <div className="search-container">
        <span>Поиск</span>
        <input
            className="search-input"
            type="text"
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
        />
        <p>{searchValue}</p>
    </div>
}