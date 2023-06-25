import Editor from "@/editor";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex h-screen flex-col items-center justify-between p-12  ${inter.className}`}
    >
      <Editor />
    </main>
  );
}
