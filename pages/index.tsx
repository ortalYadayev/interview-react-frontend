import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import handler from './api/hello';

const Home: NextPage = () => {
    const [images, setImages] = useState([])

    useEffect( () => {
        async function fetchData() {
            const res = await handler();
            console.log(res)

            setImages(res.data);
        }

        fetchData();
    }, []);

  return (
    <div className={styles.container}>
        <div className={styles.home}>

            <div className={styles.header}>
                <div className={styles.title}>
                    Coing
                </div>
                <button className={styles.loading}>
                    Load Images
                </button>
            </div>

            <div className={styles.main}>
                {images.map(image =>
                    <div key={image.id} className={styles.card}>
                        <img src={image.url} alt="600" />
                        <div className="px-6 py-4">
                            <p>
                                { image.title }
                            </p>
                        </div>
                    </div>
                )}
            </div>


          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
        </div>
    </div>
  )
}

export default Home
