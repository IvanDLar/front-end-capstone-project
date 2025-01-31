import Image from "next/image";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header"
import Main from "./components/Main/Main"
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
      <Footer/>
    </div>
    </>
  );
}
