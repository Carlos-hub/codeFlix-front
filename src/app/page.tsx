/* eslint-disable react/no-unescaped-entities */
import { Header } from "@/components/Header";
import { MovieRow } from "../components/MovieRow";
import { Banner } from "../components/Banner";

export default function Home() {
  return (
    <div className="relative  h-screen lg:h-[140vh] bg-gradient-to-b overflow-hidden from-transparent to-black">
      <Header/>
      <main className="relative pb-24 pl-4 lh:space-y-24 lg:pl-16">
        <Banner/>
        <MovieRow sectionTitle={"Horror Movies"}/>
        <MovieRow sectionTitle={"Action and adventure"}/>

      </main>
    </div>
  );
}
