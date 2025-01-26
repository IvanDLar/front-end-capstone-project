import Image from "next/image";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}
