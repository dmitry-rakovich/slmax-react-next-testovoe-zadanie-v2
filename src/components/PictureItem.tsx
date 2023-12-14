import { IPicture } from "@/types"
import styles from './components.module.css'

type Props = {
    picture: IPicture,
    favorites: IPicture[],
    setFavorites: (arr: IPicture[]) => void
}
const PictureItem = ({ picture, setFavorites, favorites }: Props) => {

    const addToFavorites = (picture: IPicture) => {
        const newFavorites = [...favorites, picture]
        localStorage.setItem('unsplash-favorites', JSON.stringify(newFavorites))
        setFavorites(newFavorites)
    }

    const removeFromFavorites = (id: string) => {
        const newFavorites = favorites.filter(picture => picture.id !== id)
        setFavorites(newFavorites)
        localStorage.setItem('unsplash-favorites', JSON.stringify(newFavorites))
    }

    const isFavorites = (id: string) => {
        return favorites.find(picture => picture.id === id)
    }

    return (
        <div className={styles['picture-container']} key={picture.id}>
            <img
                src={picture.urls.small}
                alt={picture.alt_description}
                width={200}
                height={200}
            />
            {
                isFavorites(picture.id)
                    ? <button onClick={() => removeFromFavorites(picture.id)}>Удалить из избранного</button>
                    : <button onClick={() => addToFavorites(picture)}>Добавить в избранное</button>
            }
        </div>
    )
}

export default PictureItem