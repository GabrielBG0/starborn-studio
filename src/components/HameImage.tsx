import Image from "next/image";
import homeImage from "../../public/HomeImage.png";
import imageCrop from "../../public/ImageCrop.svg";

export default function HomeImage() {
  return (
    <div
      className="-ml-16 -mr-16 mt-2"
      style={{
        position: "relative",
      }}
    >
      <Image
        src={imageCrop}
        alt="image crop"
        style={{
          width: "100%",
          height: "auto",
          top: 0,
          left: 0,
          position: "relative",
          zIndex: "1",
        }}
      />
      <Image
        src={homeImage}
        alt="home Image"
        priority
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "0",
        }}
      />
    </div>
  );
}
