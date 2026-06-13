import Image from "next/image";
import Header from "@/components/Header"

export default function Home({children}) {
  return (
    <>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </>
  );
}
