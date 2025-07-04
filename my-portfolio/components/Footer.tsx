import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <h2>Andrei Soares</h2>
      <Link href={"/"}>
        <button>github</button>
      </Link>
      <Link href={"/"}>
        <button>LikedIn</button>
      </Link>
      <Link href={"/"}>
        <button>Email</button>
      </Link>
    </div>
  );
}
