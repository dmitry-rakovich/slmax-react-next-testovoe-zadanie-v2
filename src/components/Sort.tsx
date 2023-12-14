'use client'
import styles from './components.module.css'

type Props = {
    onSort: (value: string) => void,
    sort: string
}
const Sort = ({ onSort, sort }: Props) => {

    return (
        <div className={styles['button-container']}>
            <span>Сортировка по: </span>
            <button className={sort === 'latest' ? styles.active : ''} value={'latest'} onClick={(e) => onSort((e.target as HTMLButtonElement).value)}>Дате</button>
            <button className={sort === 'relevant' ? styles.active : ''} value={'relevant'} onClick={(e) => onSort((e.target as HTMLButtonElement).value)}>Популярности</button>
        </div >
    )
}

export default Sort