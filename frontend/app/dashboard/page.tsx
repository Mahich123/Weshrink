"use client"

import Header from "@/components/Header"
import CreateUrlForm from "@/components/CreateUrlForm"

export default function DashBoardPage() {

    return (
        <div className="bg-gradient-radial from-[#4E4E55] to-[#151A36] min-h-screen">
            <Header />
            <CreateUrlForm />
        </div>
    )
}
