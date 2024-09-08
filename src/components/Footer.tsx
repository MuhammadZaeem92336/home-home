import React from "react"
import Link from "next/link"
const Footer = () => {
    return (
        <div className="flex gap-9 p-10 bg-indigo-200">
            <Link href="\">Home</Link>
            <Link href="about">About Home icon</Link>
            <Link href="contact">About Contact</Link>
            <Link href="address">About Home Adress</Link>
        </div>
    )
}

export default Footer