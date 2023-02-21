import Image from "next/image";

export default function Home() {
  return (
    <div className="Background">
      <div className="Container">
        <Image
          src="/Icon No Backgound.svg"
          alt="Starborn Studio Logo"
          className="Logo"
          width={150}
          height={150}
          priority
        />
        <h1 className="Headder">Under Contruction</h1>
      </div>
    </div>
  );
}
