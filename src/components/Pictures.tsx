import { IPicture } from '@/types'
import styles from './components.module.css'

type Props = {
    pictures: IPicture[]
}
const Pictures = ({ pictures }: Props) => {
    return (
        <div className={styles.grid}>
            {pictures.map((picture) => (
                <div key={picture.id}>
                    <img
                        src={picture.urls.small}
                        alt={picture.alt_description}
                        width={200}
                        height={200}
                    />
                </div>
            ))}
        </div>
    )
}

export default Pictures