'use client'
import { useEffect, useState } from 'react'
import { getPhotosByQuery } from '@/app/api/unsplash'
import { IPicture } from '@/types'
import Filter from '@/components/Filter'
import Sort from '@/components/Sort'
import Pictures from '@/components/Pictures'
import Pagination from '@/components/Pagination'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'


export default function Home() {

    const [filter, setFilter] = useState('random')
    const [sort, setSort] = useState('relevant')
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)
    const [pictures, setPictures] = useState<IPicture[]>([])
    const [loading, setLoading] = useState(true)
    const session = useSession()

    useEffect(() => {
        getPhotosByQuery({
            filter,
            sort,
            page
        })
            .then(res => {
                setPictures(res.results)
                setPages(res.total_pages)
            })
            .finally(() => setLoading(false))
    }, [filter, sort, page])
    if (!session.data) redirect('/login')
    return (
        <>
            <Filter onFilter={setFilter} filter={filter} />
            <Sort onSort={setSort} sort={sort} />
            {
                loading
                    ? <h1>загрузка</h1>
                    : pictures.length > 0
                        ? <>
                            <Pictures pictures={pictures} />
                            <Pagination onPage={setPage} pages={pages} />
                        </>
                        : <h1>не найдено</h1>
            }
        </>
    )
}
