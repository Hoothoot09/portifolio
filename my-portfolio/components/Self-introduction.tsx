import Image from "next/image";

export default function SelfIntroduction() {
  return (
    <div>
      <div className="flex gap-1 items-center">
       <Image src="/localization.svg" alt="localization icon" width={12} height={12}/>
       <span className="text-[#2D2D2D]">Salvador, BA</span>
      </div>
    </div>
  )
}