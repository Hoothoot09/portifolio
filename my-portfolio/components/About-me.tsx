import { CardAboutMe } from "@/components/Cards/CardAboutMe";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="flex flex-col w-full p-3 pt-[53px] mt-6 mb-6
      justify-center items-center"
    >
      <div className="mb-5">
        <h1 className="text-3xl text-[#2D2D2D] font-bold">Sobre Mim</h1>
      </div>
      <div>
        <p className="max-w-xl text-xl text-[#2D2D2D] opacity-80 mx-auto">
          Estou à 1 ano e meio estudando sobre linguagens de Front-End,
          aprimorando e desenvolvendo minhas habilidades.
        </p>
      </div>
      <CardAboutMe />
    </div>
  );
}
