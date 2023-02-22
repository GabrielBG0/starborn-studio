import Image from "next/image";
import homeImage from "../../public/HomeImage.png";
import imageCropTop from "../../public/ImageCropTop.svg";
import imageCropBot from "../../public/ImageCropBottom.svg";

export default function HomeImage() {
  return (
    <div className="-ml-16 -mr-16 mt-2">
      <Image
        src={imageCropTop}
        alt="image crop"
        style={{
          marginBottom: "-80px",
          width: "100%",
          height: "auto",
          position: "relative",
          zIndex: "1",
        }}
      />
      <Image src={homeImage} alt="home Image" priority />
      <Image
        src={imageCropBot}
        alt="image crop"
        style={{
          marginTop: "-91px",
          width: "100%",
          height: "auto",
          position: "relative",
          zIndex: "1",
        }}
      />
    </div>
  );
}
