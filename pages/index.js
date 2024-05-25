import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";



export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10" >
        <section className=" min-h-screen">
          <div className="py-10 mb-12 flex justify-between ">
            <h1 className="text-xl font-thin text-gray-500">developedby Judy</h1>
            <ul className="flex items-center ">
              <li ><BsFillMoonStarsFill className="cursor-pointer text-2xl" /></li>
              <li > <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500  bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
