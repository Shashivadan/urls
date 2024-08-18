import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <>
      <div className=" bg-primary-color text-white h-screen bg-black  overflow-hidden ">
        <div
          className="hidden md:block md:absolute   md:top-[-300px] md: left-[500px]  h-[1000px] w-[1000px] overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(closest-side, rgba(128,0,128,0.21), #0000)",
          }}
        ></div>
        <div className="  relative h-full w-full">
          <Header />
          <div className="absolute top-40 w-full">
            <div className=" flex justify-center">
              <InfoCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
