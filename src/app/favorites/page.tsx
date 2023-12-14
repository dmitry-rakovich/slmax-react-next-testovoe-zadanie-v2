'use client'

import Pictures from "@/components/Pictures"
import { IPicture } from "@/types"
import { useEffect, useState } from "react"

const pages = () => {
    const [favorites, setFavorites] = useState<IPicture[]>([])
    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem('unsplash-favorites')!) || [])
    }, [])
    return (
        <>
            {
                favorites.length > 0
                    ? <Pictures setFavorites={setFavorites} favorites={favorites} pictures={favorites} />
                    : <h1>Нет изображений в избранном</h1>
            }
        </>
    )
}

export default pages