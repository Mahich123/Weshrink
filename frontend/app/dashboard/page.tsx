
import Header from "@/components/Header"
import CreateUrlForm from "@/components/CreateUrlForm"
import UrlList from "@/components/UrlList"

export default function DashBoardPage() {

    return (
        <div className="bg-gradient-radial from-[#4E4E55] to-[#151A36] font-Nunito min-h-screen">
            <Header />
            <CreateUrlForm />
            <UrlList />
        </div>
    )
}
