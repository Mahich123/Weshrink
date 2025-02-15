import { Button } from "@/components/ui/button";
import { TbError404Off } from "react-icons/tb";
import Link from "next/link";
import { client } from "@/utils/honoClient";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { url: string } }) {
  const { url: short } = await params;

  // Fetch data from the API
  const res = await client.urls[":short"].$get({
    param: { short },
  });

  if (res.ok) {
    const data = await res.json();
    console.log(data);

    // Redirect if the URL is valid
    if (data.url) {
      redirect(data.url);
    }
  }

  // Fallback UI if the URL is not found or an error occurs
  return (
    <main className="flex h-[100dvh] w-full flex-col items-center justify-center bg-white px-4 dark:bg-gray-950">
      <div className="container mx-auto flex max-w-md flex-col items-center justify-center gap-6">
        <TbError404Off className="h-32 w-32 text-gray-500 dark:text-gray-400" />
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Oops, page not found
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {`We couldn't find the page you were looking for. Don't worry, it
            happens to the best of us.`}
          </p>
        </div>
        <Button asChild className="rounded-full p-6 text-white">
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </main>
  );
}
