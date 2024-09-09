import React from "react"
import Link from "next/link"
const Footer = () => {
    return (
        <div className="text-emerald-900 flex gap-9 p-10 bg-indigo-200">
            <Link href="\">┃𝑯𝒐𝒎𝒆┃</Link>
            <Link href="about">┃𝑨𝒃𝒐𝒖𝒕 𝑯𝒐𝒎𝒆┃</Link>
            <Link href="contact">┃𝑨𝒃𝒐𝒖𝒕 𝑪𝒐𝒏𝒕𝒂𝒄𝒕┃</Link>
            <Link href="address">┃𝑨𝒃𝒐𝒖𝒕 𝑯𝒐𝒎𝒆 𝑨𝒅𝒅𝒓𝒆𝒔𝒔┃</Link>
        </div>
    )
}

export default Footer