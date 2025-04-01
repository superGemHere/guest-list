import { JSX } from "react";
import styles from "./home.module.css";
import { ListFilter, Users, MapPinCheckInside } from "lucide-react";
import PartyFinder from "../../ui/PartyFinder/PartyFinder";
import { Link, redirect } from "react-router-dom";

export default function Home(): JSX.Element {

   return (
      <div className={styles.home}>
         <h1>Welcome to the Guest List Application!</h1>
         <div className={styles.aboutContainer}>
            <p>This application helps you filter out your Ducklings/partners from a partner list, narrowing down to those within a 100km radius of your location.</p>
            <div className={styles.listContainer}>
               <div className={styles.listItem}>
                  <p>With this tool, you can:</p>
                  <p><MapPinCheckInside className={styles.icon} /> - Filter and view only the partners that are within a 100km range</p>
                  <p><Users  className={styles.icon} /> - Easily create and manage your guest list based on proximity</p>
                  <p><ListFilter  className={styles.icon} /> - Sort and organize partners by ID </p>
               </div>
               <PartyFinder />
            </div>
         </div>
         <div className={styles.actionContainer}>
            <p>Ready to find the right partners? Click below to get started!</p>
            <Link className={styles.redirectBtn} to="/guestlist">Get Started</Link>
         </div>
      </div>
   );
};