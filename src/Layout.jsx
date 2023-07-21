import Navbar from "./components/Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const { main, footer, footerText, footerName } = styles;

  return (
    <main className={main}>
      <Navbar />
      { children }
      <footer className={footer}>
        <p className={footerText}>Handcrafted by <span className={footerName}>Sai</span></p>
      </footer>
    </main>
  )
}


export default Layout;