"use client"

import { useState, useRef, type ChangeEvent, useEffect } from "react"
import { Upload, Filter, MapPin, User, AlertCircle } from "lucide-react"
import styles from "./guestList.module.css"
import DEFAULT_PARTNERS from "../../../data/guests"
import type { Guest } from "../../../data/guests"
import Table from "../../ui/Table/Table"


export default function GuestList() {
  const [partners, setPartners] = useState<Guest[]>(DEFAULT_PARTNERS)
  const [filteredGuests, setFilteredGuests] = useState<Guest[]>([])
  const [isFiltered, setIsFiltered] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>("Upload Partners File")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const PLOVDIV_OFFICE = {
    latitude: 42.1505961,
    longitude: 24.7751846,
  }

  const RADIUS_KM = 100

  // Calculate distance between two coordinates using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371 // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180
    const dLon = ((lon2 - lon1) * Math.PI) / 180

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  const filterGuests = () => {
    try {
      const filtered = partners
        .map((guest) => {
          const distance = calculateDistance(
            PLOVDIV_OFFICE.latitude,
            PLOVDIV_OFFICE.longitude,
            Number.parseFloat(guest.latitude),
            Number.parseFloat(guest.longitude),
          )
          return { ...guest, distance }
        })
        .filter((guest) => guest.distance <= RADIUS_KM)
        .sort((a, b) => (a.partner_id || 0) - (b.partner_id || 0))

      setFilteredGuests(filtered)
      setIsFiltered(true)
      setError(null)
    } catch (err) {
      setError("Error filtering guests. Please check the data format.")
    }
  }

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    
    if (!file) return
    setFileName(file.name)

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        const lines = content.split("\n").filter((line) => line.trim() !== "")

        const parsedPartners: Guest[] = lines.map((line) => {
          try {
            return JSON.parse(line)
          } catch (err) {
            throw new Error(`Invalid JSON format in line: ${line}`)
          }
        })

        setPartners(parsedPartners)
        setIsFiltered(false)
        setError(null)
      } catch (err) {
        setError(`Error parsing file: ${err instanceof Error ? err.message : "Unknown error"}`)
      }
    }

    reader.onerror = () => {
      setError("Error reading file")
    }

    reader.readAsText(file)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const resetToDefault = () => {
    setPartners(DEFAULT_PARTNERS)
    setFileName("Upload Partners File")
    setIsFiltered(false)
    setFilteredGuests([])
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <MapPin className={styles.cardIcon} />
            Guest Radius Filter
          </div>
          <p className={styles.cardDescription}>
            Filter guests within 100km radius of coordinates: {PLOVDIV_OFFICE.latitude},{" "}
            {PLOVDIV_OFFICE.longitude}
          </p>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.buttonGroup}>
            <button onClick={filterGuests} className={styles.primaryButton}>
              <Filter size={16} />
              Create Guest List
            </button>

            <button onClick={triggerFileInput} className={styles.secondaryButton}>
              <Upload size={16} />
              {fileName}
            </button>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".txt"
              style={{ display: "none" }}
            />
            <button onClick={resetToDefault} className={styles.tertiaryButton}>
              Clear List
            </button>
          </div>

          {error && (
            <div className={styles.errorAlert}>
              <AlertCircle size={20} />
              <p>{error}</p>
            </div>
          )}

          {isFiltered && (
            <div className={styles.infoText}>
              Found {filteredGuests.length} guests within {RADIUS_KM}km radius
            </div>
          )}

          {isFiltered && filteredGuests.length > 0 ? (
            <div className={styles.tableContainer}>
             <Table  filteredGuests={filteredGuests} />
            </div>
          ) : isFiltered ? (
            <div className={styles.emptyState}>No guests found within {RADIUS_KM}km radius</div>
          ) : (
            <div className={styles.emptyState}>Click "Create Guest List" to filter guests</div>
          )}
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.footerText}>Total partners: {partners.length}</div>
        </div>
      </div>
    </div>
  )
}

