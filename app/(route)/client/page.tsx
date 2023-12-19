"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(1);
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div className="text-3xl text-white font-bold">
        logged in in as {session.user.username} 🥵
        <button className="button" onClick={() => setCount(count + 1)}>
          click
        </button>
        {count}
      </div>
    );
  }
  if (status === "loading") {
    return <div className="text-3xl text-white font-bold">🤔</div>;
  }
  if (status === "unauthenticated") {
    return (
      <div className="text-3xl text-white font-bold">unauthenticated 🫷</div>
    );
  }
  return <button>username</button>;
};

export default Page;
