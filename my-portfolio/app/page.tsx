import Header from "@/components/Header";
import SelfIntroduction from "@/components/Self-introduction";

export default function Home() {
  return (
    <div className="w-full">
     <Header />
     <div className="pt-26 px-4 bg-gradient-to-b from-white to-[#e0e0e0]">
      <SelfIntroduction />
     </div>
    </div>
    
  );
}
