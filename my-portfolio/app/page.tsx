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
      <section className="pt-26 px-4 bg-gradient-to-b from-white to-[#e0e0e0]">
        <SelfIntroduction />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <MyProjects />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
