"use client"

import { useEffect, useState } from "react"
import { User } from "lucide-react"
import styles from "./PartyFinder.module.css"

type PartyMember = {
  id: number
  x: number
  y: number
  distance: number
  found: boolean
  animationDelay: number
}

export default function PartyFinder() {
  const [members, setMembers] = useState<PartyMember[]>([])

  // Generate random party members
  useEffect(() => {
    const generatedMembers: PartyMember[] = []

    for (let i = 0; i < 25; i++) {
      // Random angle and distance
      const memberAngle = Math.random() * Math.PI * 2
      const distance = Math.random() * 100

      // Convert polar to cartesian coordinates (normalized from -1 to 1)
      const x = Math.cos(memberAngle) * (distance / 100)
      const y = Math.sin(memberAngle) * (distance / 100)

      // Random animation delay for more natural effect
      const animationDelay = Math.random() * 4

      generatedMembers.push({
        id: i,
        x,
        y,
        distance,
        found: Math.random() > 0.7, // Some dots start as found
        animationDelay,
      })
    }

    setMembers(generatedMembers)

    // Gradually reveal more dots over time
    const interval = setInterval(() => {
      setMembers((prevMembers) =>
        prevMembers.map((member) => {
          if (!member.found && Math.random() > 0.9) {
            return { ...member, found: true }
          }
          return member
        }),
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.radar}>
        {/* Distance circles */}
        <div className={styles.circle} style={{ width: "25%", height: "25%" }} />
        <div className={styles.circle} style={{ width: "50%", height: "50%" }} />
        <div className={styles.circle} style={{ width: "75%", height: "75%" }} />
        <div className={styles.circle} style={{ width: "100%", height: "100%" }} />

        {/* Party members */}
        {members.map((member) => (
          <div
            key={member.id}
            className={`${styles.member} ${member.found ? styles.found : ""}`}
            style={{
              left: `${50 + member.x * 50}%`,
              top: `${50 + member.y * 50}%`,
              animationDelay: `${member.animationDelay}s`,
            }}
          />
        ))}

        {/* Center point (you) */}
        <div className={styles.center}>
          <User size={16} className={styles.centerIcon} />
        </div>
      </div>
    </div>
  )
}

