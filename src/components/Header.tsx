import React from "react"
import Link from "next/link"
const Header = () => {
    return (
        <div className="flex gap-20 p-10 bg-orange-200 justify-left font-serif">
            <Link href="\"><i><b>Home</b></i></Link>
            <Link href="about"><i><b>About Home</b></i></Link>
            <Link href="contact"><i><b>About Contact</b></i></Link>
            <Link href="address"><i><b>About Address</b></i></Link>
        </div>
    )
}

export default Header