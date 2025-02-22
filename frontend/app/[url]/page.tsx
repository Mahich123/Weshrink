import { client } from "@/utils/honoClient";
import { redirect } from "next/navigation";
import Page404 from "@/components/404";

export default async function Page({
  params,
}: {
  params: Promise<{ url: string }>;
}) {
  const short = (await params).url;

  // Fetch data from the API
  const res = await client.urls[":short"].$get({
    param: { short },
  });

  if (res.ok) {
    const data = await res.json();
    console.log(data);

    if (data.url) {
      redirect(data.url.longUrl);
    }
  }

  return <Page404 />;
}
