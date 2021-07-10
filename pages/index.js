/** @format */
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    // flex flex-col items-center justify-center min-h-screen py-2
    <div className="">
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
