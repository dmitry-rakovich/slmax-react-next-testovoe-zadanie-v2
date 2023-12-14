'use client'
import styles from './login.module.css'
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { FormEventHandler } from "react"



const Login = () => {

    const router = useRouter()

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
            callbackUrl: '/gallery',

        })
        if (response && !response.error) {

            router.push('/gallery')
        } else {
            alert('Ошибка авторизации')
            console.log(response)
        }

    }
    return (
        <form onSubmit={handleSubmit} className={styles['login-form']}>
            <input type="email" name="email" placeholder="user@email.com" required />
            <input type="password" name="password" placeholder="admin" required />
            <button type="submit">Войти</button>
        </form>
    )
}

export default Login