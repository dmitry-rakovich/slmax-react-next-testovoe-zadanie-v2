"use client"
import styles from './components.module.css'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'


const Header = () => {

    const pathName = usePathname()
    const session = useSession()

    return (
        <header className={styles.header}>
            <Link className={pathName === '/' ? styles.active : ''} href={'/'}>Главная</Link>

            {
                session?.data
                    ? <>
                        <Link className={pathName === '/gallery' ? styles.active : ''} href={'/gallery'}>Галерея</Link>
                        <Link href='#' onClick={() => signOut({ callbackUrl: '/' })}>Выйти</Link>
                    </>
                    : <Link className={pathName === '/login' ? styles.active : ''} href={'/login'}>Логин</Link>
            }

        </header>
    )
}

export default Header