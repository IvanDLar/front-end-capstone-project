import Image from "next/image";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Navbar from "./components/Navbar/Navbar"

import styles from "./page.module.css";

export const metadata = {
  title: 'Little Lemon Restaurant',
  description: 'Mediterranean restaurant specialized in Greek cuisine.',
  image: "./little-lemon-logo.svg",
}
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className={styles.page}>
      <Header/>
      <Main/>
      <Image
                      src="../Laughing.svg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      alt="Two cooks laughing"
                  />
      <Footer/>
    </div>
    </>
  );
}
