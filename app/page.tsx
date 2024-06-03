import Image from "next/image";
import Hero from "../components/Hero";
import DataTable from "@/components/DataTable";

async function fetchCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return data;
}

export default async function Home() {

  const countries = await fetchCountries();
  console.log(countries);

  return (
    <main className=" flex-col items-center justify-between">
       <Hero />
       <div className="md:mx-20">
       <DataTable countries={countries} />
       </div>
    </main>
  );
}
