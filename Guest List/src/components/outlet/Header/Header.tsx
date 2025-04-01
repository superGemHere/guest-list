import { JSX, useEffect, useState } from "react";
import styles from "./header.module.css";
import { Logs } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth > 480) {
            setIsMenuOpen(false);
         }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, [window.innerWidth]);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <header className={styles.header}>
         <div className={styles.headerContent}>
            <h1>Guest List</h1>
            <nav className={`${styles.headerNav} ${isMenuOpen ? styles.menuOpen : ""}`}>
               <ul className={styles.navList}>
                  <li className={styles.navItem}><Link to="/">Home</Link></li>
                  <li className={styles.navItem}><Link to="/guestlist">Guest List</Link></li>
               </ul>
            </nav>
            <Logs 
               className={styles.menuIcon} 
               color="#131313" 
               onClick={toggleMenu} 
            />
         </div>
      </header>
   );
}
