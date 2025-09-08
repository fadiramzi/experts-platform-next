import Link from 'next/link'
import React from 'react'

export default function TopNavbar() {
  return (
    <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/experts">Experts</Link></li>
        </ul>
  )
}
