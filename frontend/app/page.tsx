"use client";
import { client } from "@/utils/honoClient";

export default function Home() {
  const handleSubmit = async () => {
    try {
      const res = await client.urls.$post({
        json: {
          longUrl: "https://example.com",
          alias: "jj",
          urlName: "jj",
          userID: "1",
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
