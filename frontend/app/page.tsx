"use client";
import { client } from "@/utils/honoClient";

export default function Home() {
  const handleSubmit = async () => {
    try {
      const res = await client.urls.$post({
        json: {
          long_url: "https://example.com",
          shortUrl: "http://localhost:3001/jj",
          alias: "jj",
          user: "test",
          url_name: "test",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <button onClick={handleSubmit}>Create Short URL</button>;
}
