'use client'
import styles from './components.module.css'

type Props = {
    onFilter: (text: string) => void,
    filter: string
}
const Filter = ({ onFilter, filter }: Props) => {

    return (
        <div className={styles['button-container']}>
            <span>Фильтр: </span>
            <button className={filter === 'random' ? styles.active : ''} value={'random'} onClick={(e) => onFilter((e.target as HTMLButtonElement).value)}>Случайные</button>
            <button className={filter === 'nature' ? styles.active : ''} value={'nature'} onClick={(e) => onFilter((e.target as HTMLButtonElement).value)}>Природа</button>
            <button className={filter === 'city' ? styles.active : ''} value={'city'} onClick={(e) => onFilter((e.target as HTMLButtonElement).value)}>Города</button>
            <button className={filter === 'tech' ? styles.active : ''} value={'tech'} onClick={(e) => onFilter((e.target as HTMLButtonElement).value)}>Техника</button>
            <button className={filter === 'portraits' ? styles.active : ''} value={'portraits'} onClick={(e) => onFilter((e.target as HTMLButtonElement).value)}>Портреты</button>
        </div>
    )
}

export default Filter