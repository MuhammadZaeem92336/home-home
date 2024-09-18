import React from "react"
import Link from "next/link"
const Footer = () => {
    return (
        <div className="fixed bottom-0 flex gap-20 fix-bottom p-10 bg-indigo-200 w-full justify-center font-serif">
            <Link href="\"><i><b>Home</b></i></Link>
            <Link href="about"><i><b>About Home</b></i></Link>
            <Link href="contact"><i><b>About Contact</b></i></Link>
            <Link href="address"><i><b>About Address</b></i></Link>
        </div>
    )
}

export default Footer