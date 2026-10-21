"use client";

import { CardTodoList } from "./Cards/CardTodoList";
import { CardAzevedoStore } from "./Cards/CardAzevedoStore";
import { useEffect, useRef, useState } from "react";

export default function MyProjects() {
  const [visibleMyProjects, setVisibleMyProjects] = useState(false);
  const [visibleTodoList, setVisibleTodoList] = useState(false);
  const [visibleAzevedoStore, setVisibleAzevedoStore] = useState(false);
  const myProjectsRef = useRef<HTMLDivElement>(null);
  const todoListRef = useRef<HTMLDivElement>(null);
  const azevedoStoreRef = useRef<HTMLDivElement>(null);

  function handleVisibility(value: IntersectionObserverEntry) {
    if (value.isIntersecting) {
      setVisibleMyProjects(true);
      setVisibleTodoList(true);
      setVisibleAzevedoStore(true);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(handleVisibility);
    });

    if (myProjectsRef.current) {
      observer.observe(myProjectsRef.current);
    }

    if (myProjectsRef.current) {
      observer.observe(myProjectsRef.current);
    }

    if (myProjectsRef.current) {
      observer.observe(myProjectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="projects"
      className="flex flex-col max-w-[1400px] pt-[70px] max-sm:mt-0 mt-6 mb-6 justify-center items-center bg-[#E0E0E0]"
    >
      <div ref={myProjectsRef}>
        <div className="mb-5">
          <h2
            className={
              visibleMyProjects
                ? "max-sm:text-2xl text-3xl text-center text-[#2D2D2D] font-[Space_Grotesk] font-bold opacity-100 animate-fadeIn transition duration-3500"
                : "max-sm:text-2xl text-3xl text-center text-[#2D2D2D] font-[Space_Grotesk] font-bold opacity-0"
            }
          >
            Projetos em Destaque
          </h2>
        </div>
        <p
          className={
            visibleMyProjects
              ? "max-sm:text-sm text-xl text-justify text-[#2D2D2D] font-[Inter] opacity-80 w-full mb-8 px-30 animate-fadeIn transition duration-3500"
              : "max-sm:text-sm text-xl text-justify text-[#2D2D2D] font-[Inter] opacity-0 w-full mb-8 px-30"
          }
        >
          Aqui estão alguns dos meus projetos mais recentes, desenvolvidos da
          ideia ao deploy. Cada projeto reflete minhas habilidades em
          desenvolvimento web, design de interfaces e resolução de problemas,
          com foco em criar experiências pensadas para o usuário e código
          funcional, organizado e durável. Sinta-se à vontade para explorar os
          projetos, conferir as demos ao vivo e conhecer mais sobre cada
          resultado.
        </p>
      </div>

      <div className="flex max-lg:flex-col w-full justify-center gap-10 max-sm:mb-3 mb-6">
        <div
          ref={todoListRef}
          className={
            visibleTodoList
              ? "opacity-100 translate-x-0 transition duration-4000"
              : "opacity-0 -translate-x-[100px]"
          }
        >
          <CardTodoList />
        </div>
        <div
          ref={azevedoStoreRef}
          className={
            visibleAzevedoStore
              ? "opacity-100 translate-x-0 transition duration-4000"
              : "opacity-0 -translate-x-[-100px]"
          }
        >
          <CardAzevedoStore />
        </div>
      </div>
    </div>
  );
}
