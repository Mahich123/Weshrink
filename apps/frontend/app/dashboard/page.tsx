"use client"

import Header from "@/components/Header"
import CreateUrlForm from "@/components/CreateUrlForm"
import UrlList from "@/components/UrlList"
import useAuth from "@/utils/userSession"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashBoardPage() {
    const {session} = useAuth()

    const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session, router]);

  if (!session) {
    return null; 
  }
    return (
        <div className="bg-gradient-radial from-[#4E4E55] to-[#151A36] font-Nunito min-h-screen">
            <Header />
            <CreateUrlForm />
            <UrlList />
        </div>
    )
}
