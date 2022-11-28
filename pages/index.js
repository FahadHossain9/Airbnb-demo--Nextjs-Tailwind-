
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from"../components/MediumCard";
import LargeCard from '../components/LargeCard';
import Footer from "../components/Footer"
export default function Home ({exploreData,cardsData}) {
 
  const value = [
    {
      img: "https://links.papareact.com/5j2",
      location: "London",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/1to",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/40m",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/msp",
      location: "York",
      distance: "4-hour drive",
    },
    {
      img: "https://links.papareact.com/2k3",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/ynx",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Newquay",
      distance: "6-hour drive",
    },
    {
      img: "https://links.papareact.com/41m",
      location: "Hove",
      distance: "2-hour drive",
    },
  ];

  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:gird-cols-3 xl:grid-cols-4 ">
            {value?.map(({ img, location, distance }) => {
              return (
                <SmallCard
                  key={img}
                  img={img}
                  distance={distance}
                  location={location}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">
            Live Anywhere
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide -ml-3 p-3 ">
            {cardsData?.map(item=>(
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curtaed by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer/>
    </div>
  );
};


export async function getStaticProps(){
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
  (res)=>res.json()
  );
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res)=>
    res.json()
  );
  return{
    props: {
      exploreData,
      cardsData
    }
  }
}
