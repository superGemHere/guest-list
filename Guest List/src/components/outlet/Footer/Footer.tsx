import { JSX } from "react";
import styles from "./footer.module.css";
import { Github } from "lucide-react"
import { Link } from "react-router-dom";

export default function Footer(): JSX.Element {

   return (
      <footer className={styles.footer}>
         <div className={styles.footerContent}>
            <div className={styles.footerLinks}>
               <Link to="/">Home</Link>
               <Link to="/guestlist">Guest List</Link>
            </div>
            <div className={styles.credentials}>
               <p>© 2025 Guest List. All rights reserved.</p>
               <p>Created by superGemHere</p>
            </div>
            <div className={styles.footerLinks}>
            <a target="_blank" href="https://github.com/superGemHere/guest-list" className={styles.icon}><Github size={20} /></a>
            </div>
         </div>
      </footer>
   );
}