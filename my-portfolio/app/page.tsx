import Header from "@/components/Header";
import SelfIntroduction from "@/components/Self-introduction";

export default function Home() {
  return (
    <div>
     <Header />
     <div className="pt-26 px-5">
      <SelfIntroduction />
     </div>
    </div>
    
  );
}
