"use client"

import { Loader } from 'lucide-react'
import Header from "@/components/Header"
import CreateUrlForm from '@/components/CeateUrlForm'


const DashBoardPage = () => {

    return (
        <div className="bg-gradient-radial from-[#4E4E55] to-[#151A36] min-h-screen" >
            <Header />
            <CreateUrlForm />

        </div>


    )
}

export default DashBoardPage