import Image from "next/image";
import Headshot from "@/app/_components/headshot";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] overflow-auto items-center justify-items-center min-h-screen p-5 pb-20 gap-16 sm:p-5 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
        
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
          
          {/*Headshot, Title, and Subtitle*/}
          <div
            className="max-w-prose flex flex-col w-full h-full justify-center items-center"
          >
            <Headshot />
            
            <h1
              className="text-xl font-[family-name:var(--font-geist-mono)]"
            >
              Hello, I'm Murtaza Haque!
            </h1>
            
            <h2
              className="flex text-center h-full justify-center items-center text-m font-[family-name:var(--font-geist-mono)]"
            >
              I am a student at the Texas Academy of Mathematics and Science in the University of North Texas.
              I do some cool things with computers, like website design, game development, and machine learning.

            </h2>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://instagram.com/murtazahaque"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className=""
                src="/brand-instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://github.com/TheDarkLynx786"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className=""
                src="/brand-github.svg"
                alt="Github"
                width={30}
                height={30}
              />
            </a>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://www.linkedin.com/in/murtaza-haque/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className=""
                src="/brand-linkedin.svg"
                alt="Linkedin"
                width={30}
                height={30}
              />
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
