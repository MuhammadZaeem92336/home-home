import React from "react"
import Link from "next/link"
const Footer = () => {
    return (
        <div className="fixed bottom-0 flex gap-20 fix-bottom p-10 w-full justify-center font-serif bg-gradient-to-r from-indigo-400 from-% via-sky-500 via-30% to-emerald-500 to-100% ...">
            <Link href="\"><i><b>Home</b></i></Link>
            <Link href="about"><i><b>About Home</b></i></Link>
            <Link href="contact"><i><b>About Contact</b></i></Link>
            <Link href="address"><i><b>About Address</b></i></Link>
        </div>
    )
}

export default Footer