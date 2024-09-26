'use client'
import * as React from 'react'
import { useEffect, useState } from 'react'

interface SearchInputProps {
  searchTerm: string
  onSearchChange: (newTerm: string) => void
}

let timeoutId: NodeJS.Timeout

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, onSearchChange }) => {
  const [value, setValue] = useState(searchTerm)

  useEffect(() => {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      onSearchChange(value)
    }, 700)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [onSearchChange, value])

  return (
    <div className="mb-4">
      <input
        type="text"
        className="w-full rounded-md border p-2"
        placeholder="레스토랑 이름을 검색하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
