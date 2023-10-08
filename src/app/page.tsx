import Image from "next/image";
import Header from "@/components/Header";
import bgimage from "@/../../public/StarbornBackground.svg";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-Star-Yellow">
      <div className="min-h-full min-w-full flex justify-center items-center absolute bg-art">
        <div className="h-full">
          <Image src={bgimage} alt="bg" />
        </div>
      </div>
      <div className="page">
        <Header />
        <div className="h-full flex flex-col justify-center text-white">
          <div className="h-90vh h-96 flex flex-col justify-center align-middle">
            <h1 className="lg:text-8xl md:text-7xl text-6xl font-bold mt-10">
              Creating Games That We <br /> Would Love to Play
            </h1>
          </div>
          <div>
            <Section id="ProjectStar" title="Project Star">
              <p>
                Project Star is a unnamed 2d, pixel art, Top-Down Metroidvania
                game currently in development with no release date set. The game
                is in its most early phase of development and everything is
                subject to change.
              </p>
              <p>
                Project Star will have challenging combat, big world,
                dungeon/environment puzzles and rich set of unique bosses.
              </p>
            </Section>
            <Section id="About" title="About Us">
              <p>
                Starborn Studio is a indie studio based in Brazil. Currently
                with a large team of me :). As the development of Project Star
                progress this page will be updated to reflect it, so keep an eye
                on it!
              </p>
            </Section>
            <Section id="PressKit" title="Press Kit (Project Star)">
              <p>
                <b> Developer:</b> Starborn Studio
              </p>
              <p>
                <b>Release Date:</b> TBA
              </p>
              <p>
                <b>Publisher:</b> None
              </p>
              <p>
                <b>Website:</b>{" "}
                <a
                  href="http://starbornstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  starbornstudio.com
                </a>
              </p>
              <p>
                <b>Platforms:</b> PC (Windows)
              </p>
              <p>
                <b>Contact:</b>{" "}
                <a
                  href="mailto:contactstarbornstudio@gmail.com"
                  className="underline"
                >
                  contactstarbornstudio@gmail.com
                </a>
              </p>
              <p>
                <b>Twitter: </b>{" "}
                <a
                  href="https://twitter.com/StarbornStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @StarbornStudio
                </a>
              </p>
              <p>
                <b>YouTube: </b>{" "}
                <a
                  href="https://www.youtube.com/channel/UCo8-j5Z-Muq422MMKFFFRIQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @starborstudio
                </a>
              </p>
            </Section>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
