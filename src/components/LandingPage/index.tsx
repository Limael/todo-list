import styles from './index.module.css'
import banner from '../../assets/banner.png'
import { Link } from 'react-router-dom'
export const LandingPage = () => {
    return (


        <section className={styles.section_container}>
            <article className={styles.title_container}>
                <h1 className={styles.title}>ToDo List</h1>
            </article>
            <Link to='/to-do'>
                <img className={styles.img_landing} src={banner} alt="Imagem exemplo do sistema" />
            </Link>
        </section>

    )

}