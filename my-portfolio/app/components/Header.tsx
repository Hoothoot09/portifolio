import Link from "next/link";

export default function Header() {
return (
<header className="fixed w-full p-3">
    <div className="flex justify-between">
     <h1>Andrei Soares</h1>
      <div>
       <Link href={"#about"}>About</Link>
       <Link href={"#projects"}>Projects</Link>
       <Link href={"#experience"}>Experience</Link>
       <Link href={"#contact"}>Contact</Link>
      </div>
      <button>resume</button>
    </div>
</header>
);
};