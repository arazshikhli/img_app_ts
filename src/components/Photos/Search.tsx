import React, { useState, Dispatch, SetStateAction } from "react"

export const SearchComponent = ({ searchValue, setSearchValue }: { searchValue: string, setSearchValue: (value: string) => void }) => {

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