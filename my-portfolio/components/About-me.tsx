"use client";

import { CardLanguageStudying } from "@/components/Cards/CardLanguageStudying";
import { CardFrameworkStudying } from "@/components/Cards/CardFrameworkStudying";
import { useRef, useState, useEffect } from "react";

export default function AboutMe() {
  const [visibleAboutMe, setVisibleAboutMe] = useState(false);
  const [visibleCardLanguage, setVisibleCardLanguage] = useState(false);
  const [visibleCardFramework, setVisibleCardFramework] = useState(false);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const cardLanguageRef = useRef<HTMLDivElement>(null);
  const cardFrameworkRef = useRef<HTMLDivElement>(null);

  function handleVisibility(value: IntersectionObserverEntry) {
    if (value.isIntersecting) {
      setVisibleAboutMe(true);
      setVisibleCardLanguage(true);
      setVisibleCardFramework(true);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(handleVisibility);
    });

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={aboutMeRef}
      id="about"
      className={
        visibleAboutMe
          ? "flex flex-col max-w-[1400px] pt-[70px] max-sm:mt-0 mt-6 mb-6 justify-center items-center opacity-100 transition duration-3500"
          : "flex flex-col max-w-[1400px] pt-[70px] max-sm:mt-0 mt-6 mb-6 justify-center items-center opacity-0"
      }
    >
      <div className="mb-5">
        <h2 className="max-sm:text-2xl text-3xl text-[#2D2D2D] font-[Space_Grotesk] font-bold">
          Sobre Mim
        </h2>
      </div>
      <div className="flex flex-col gap-4 max-sm:gap-2 max-sm:px-2 px-30">
        <p className="max-sm:text-sm text-xl text-justify text-[#2D2D2D] font-[Inter] opacity-80 mx-auto">
          Atualmente, venho aprimorando meus conhecimentos em desenvolvimento
          Front-End e Design de UI/UX, buscando constantemente aprender novas
          tecnologias e aperfeiçoar minhas habilidades como programador. Tenho
          como objetivo evoluir continuamente, colocando em prática os
          conhecimentos adquiridos por meio do desenvolvimento de projetos
          pessoais.
        </p>
        <p className="max-sm:text-sm text-xl text-justify  text-[#2D2D2D] font-[Inter] opacity-80 mx-auto mt-4">
          Sou apaixonado por criar interfaces intuitivas e funcionais utilizando
          o Tailwind CSS, com foco em proporcionar uma experiência positiva aos
          usuários. No momento, concentro meus estudos e projetos principalmente
          em React, Next.js e TypeScript, utilizando essas tecnologias para
          desenvolver soluções que me permitam aplicar meus conhecimentos,
          explorar novos conceitos e enfrentar desafios que contribuam para o
          meu crescimento profissional.
        </p>
      </div>
      <div className="flex h-auto justify-center max-sm:flex-col gap-4">
        <div
          ref={cardLanguageRef}
          className={
            visibleCardLanguage
              ? "opacity-100 translate-x-0 transition duration-4000"
              : "opacity-0 -translate-x-[100px]"
          }
        >
          <CardLanguageStudying />
        </div>
        <div
          ref={cardFrameworkRef}
          className={
            visibleCardFramework
              ? "opacity-100 translate-x-0 transition duration-4000"
              : "opacity-0 -translate-x-[-100px]"
          }
        >
          <CardFrameworkStudying />
        </div>
      </div>
    </div>
  );
}
