import AboutMe from "@/components/About-me";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MyProjects from "@/components/MyProjects";
import SelfIntroduction from "@/components/Self-introduction";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <section className="flex justify-center max-sm:pt-23 pt-26 max-sm:pb-2 bg-gradient-to-b from-white to-[#E0E0E0]">
        <SelfIntroduction />
      </section>
      <section className="flex justify-center">
        <AboutMe />
      </section>
      <section className="flex justify-center bg-[#E0E0E0]">
        <MyProjects />
      </section>
      <section className="flex justify-center">
        <Experience />
      </section>
      <section className="flex justify-center bg-[#E0E0E0]">
        <Contact />
      </section>
      <footer className="flex justify-center bg-[#2D2D2D]">
        <Footer />
      </footer>
    </div>
  );
}
