import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { client } from "@/utils/honoClient";
import {
  Copy,
  ChevronLeft,
  ChevronRight,
  BarChart2,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { headers } from "next/headers";
import Header from "@/components/Header";
import { CopyButton } from "@/components/CopyButton";

export default async function UrlList() {
  let urls:
    | {
        id: number;
        name: string | null;
        longUrl: string;
        userID: string | null;
        alias: string | null;
        short: string;
        expiresAt: string;
        expired: boolean;
        clickCount: number;
        createdAt: string;
      }[]
    | null = null;

  try {
    const res = await client.urls.$get();

    if (res.ok) {
      urls = (await res.json())?.urls;
      console.log(urls);
    }
  } catch (error) {
    console.log(error);
  }

  const headersList = headers();
  const host = (await headersList).get("host");
  const protocol = (await headersList).get("x-forwarded-proto") || "http";

  const fullUrl = `${protocol}://${host}/`;

  return (
    <div className="bg-[#1B1E31] h-auto">
      <Header />
      <div className="min-h-screen text-white p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-center items-center relative w-full">
            <Input
              placeholder="Search your desired links"
              className="w-52 bg-white/10 border-0 h-12 rounded-full text-center text-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urls?.map((url, i) => (
              <div
                key={i}
                className="bg-[#60567866] border-[1px] rounded-lg p-6 space-y-4 backdrop-blur-sm"
              >
                <div className="flex justify-between items-center border-b-[1px]">
                  <h3 className="text-3xl py-2 font-semibold">
                    {url.name || "Untitled"}
                  </h3>
                  <CopyButton text={url.name || "Untitled"}>
                    <Copy className="h-4 w-4" />
                  </CopyButton>
                </div>

                <div className="space-y-1">
                  <div className="pb-2">Long URL</div>
                  <div className="flex gap-2">
                    <Input
                      value={url.longUrl}
                      readOnly
                      className="border-[1px]"
                    />
                    <CopyButton text={url.longUrl}>
                      <ExternalLink className="h-4 w-4" />
                    </CopyButton>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="pb-2">Short URL</div>
                  <div className="flex gap-2">
                    <Input
                      value={fullUrl + url.short}
                      readOnly
                      className="border-[1px]"
                    />
                    <CopyButton text={fullUrl + url.short}>
                      <ExternalLink className="h-4 w-4" />
                    </CopyButton>
                  </div>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <Calendar className="h-4 w-4" />
                  Expires on: {url.expiresAt}
                </div>

                <div className="flex gap-4 pt-2">
                  <Button variant="ghost" className="flex-1 border-[1px]">
                    <BarChart2 className="h-4 w-4 mr-2" />
                    Check Stats
                  </Button>
                  <Button variant="ghost" className="flex-1 border-[1px]">
                    Update Link
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {[1, 2, 3, 4].map((page) => (
              <Button
                key={page}
                size="icon"
                className={`bg-transparent
                   ${page === 1 ? "rounded-full border-2" : ""}`}
              >
                {page}
              </Button>
            ))}
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
