'use client'
import { IPicture } from '@/types'
import styles from './components.module.css'
import PictureItem from './PictureItem'

type Props = {
    pictures: IPicture[],
    favorites: IPicture[],
    setFavorites: (arr: IPicture[]) => void
}
const Pictures = ({ pictures, favorites, setFavorites }: Props) => {
    return (
        <div className={styles.grid}>
            {pictures.map((picture) => (
                <PictureItem key={picture.id} picture={picture} favorites={favorites} setFavorites={setFavorites} />
            ))}
        </div>
    )
}

export default Pictures