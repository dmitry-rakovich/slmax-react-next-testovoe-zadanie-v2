import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './components.module.css'
type Props = {
    onPage: (page: number) => void,
    pages: number
}

const Pagination = ({ onPage, pages }: Props) => {
    return (
        <ReactPaginate
            pageCount={pages}
            activeClassName='active'
            className='pagination'
            previousLabel="Предыдущая"
            nextLabel="Следующая"
            previousClassName="page-item previous"
            previousLinkClassName="page-link"
            nextClassName="page-item next"
            nextLinkClassName="page-link"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            onPageChange={({ selected }) => onPage(selected + 1)}
        />
    )
}

export default Pagination