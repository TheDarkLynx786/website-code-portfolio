import Image from "next/image";

export default function Headshot() {
  return ( 
    <div className="flex w-full h-full justify-center items-center p-4 sm:pb-6">  
      <Image
          className="rounded-full border-4 border-blue-800"    
          src="/img/ProfessionalHeadshot.jpg"
          alt="My Professional Headshot"
          width={250}
          height={250}
      />
    </div>
  );
}
