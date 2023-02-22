import Header from "@/components/Header";
import HomeImage from "@/components/HameImage";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col bg-Galaxy-Blue p-16 text-Star-Yellow">
      <Header />
      <HomeImage />
    </div>
  );
}
