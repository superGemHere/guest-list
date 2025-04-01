import { JSX } from "react";
import { Guest } from "../../../data/guests";
import styles from "./tableRow.module.css";
import { User } from "lucide-react";


export default function TableRow({ guest }: { guest: Guest }): JSX.Element {
  return (
   <tr key={guest.partner_id} className={styles.tableRow}>
      <td className={styles.tableCell}>{guest.partner_id}</td>
      <td className={`${styles.tableCell} ${styles.nameCell}`}>
      <User size={16} color="#9ca3af" />
      {guest.name}
      </td>
      <td className={`${styles.tableCell} ${styles.coordsCell}`}>
      {guest.latitude}, {guest.longitude}
      </td>
      <td className={styles.tableCell}>
      <span className={styles.badge}>{guest.distance?.toFixed(2)} km</span>
      </td>
   </tr>
  )
}