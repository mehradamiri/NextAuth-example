import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const Page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-4xl font-bold text-white">
      Only logged-in users can access this page, such as '
      {session?.user.username}' 🥵
    </div>
  );
};

export default Page;
