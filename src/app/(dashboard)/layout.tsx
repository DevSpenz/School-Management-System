import Link from "next/link"
import Image from "next/image"

import React from 'react'
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";


function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <div className={"h-screen flex"}>
        {/*Left*/}
            <div className={"w-[16%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-slate-100 px-2"}>
                <Link href={"/"} className={"flex items-center lg:justify-start justify-center gap-2 p-4"}>
                    <Image src={"/logo.png"} alt={"logo"} width={32} height={32} />
                    <span className={"hidden lg:block"}>SchooLama</span>
                </Link>
                <Menu />
            </div>
        {/*Right*/}
            <div className={"w-[84%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll"}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout
