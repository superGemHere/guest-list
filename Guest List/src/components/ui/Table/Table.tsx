import { JSX } from "react";
import styles from "./table.module.css";
import type { Guest } from "../../../data/guests";
import TableRow from "./TableRow";


export default function Table({
   filteredGuests,
}: { filteredGuests: Guest[] }): JSX.Element{

   return(
      <table className={styles.table}>
         <thead className={styles.tableHeader}>
         <tr>
            <th className={styles.tableHeaderCell}>ID</th>
            <th className={styles.tableHeaderCell}>Name</th>
            <th className={styles.tableHeaderCell}>Coordinates</th>
            <th className={styles.tableHeaderCell}>Distance</th>
         </tr>
         </thead>
         <tbody>
         {filteredGuests.map((guest: Guest) => (
            <TableRow key={guest.partner_id} guest={guest} />
         ))}
         </tbody>
      </table>
   )
}