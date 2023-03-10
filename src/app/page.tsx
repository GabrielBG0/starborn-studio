import Header from "@/components/Header";
import HomeImage from "@/components/HameImage";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      id="Home"
      className="w-full h-full min-h-screen flex flex-col bg-Galaxy-Blue p-16 text-Star-Yellow"
    >
      <Header />
      <HomeImage />
      <Section id="ProjectStar" title="Project Star">
        <p>
          Project Star is a unnamed 2d, pixel art, isometric Metroidvania game
          currently in development with no release date set. The game is in its
          most early phase of development and everything is subject to change.
        </p>
        <p>
          Project Star will have challenging combat, big world,
          dungeon/environment puzzles and rich set of unique bosses.
        </p>
      </Section>
      <Section id="About" title="About Us">
        <p>
          Starborn Studio is a indie studio based in Brazil. Currently with a
          large team of me :). As the development of Project Star progress this
          page will be updated to reflect it, so keep an eye on it!
        </p>
      </Section>
      <Section id="PressKit" title="Press Kit">
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
      <Footer />
    </div>
  );
}
