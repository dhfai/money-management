import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, GithubIcon, PanelsTopLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen p-2">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14  mx-auto flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <PanelsTopLeft className="w-6 h-6 mr-3" />
            <span className="font-bold">dhf.ai</span>
            <span className="sr-only">shadcn/ui sidebar</span>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 bg-background"
              asChild
            >
              <Link href="https://github.com/dhfai">
                <GithubIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Dhf.ai apps and tools for developers & traders
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
            Dhf.ai adalah kumpulan aplikasi dan alat canggih yang dirancang khusus untuk membantu developer dan trader meningkatkan produktivitas serta efisiensi kerja. Dengan teknologi terbaru yang didukung oleh dhfai.ai, platform ini menyediakan solusi inovatif untuk analisis pasar, otomasi trading, pengembangan perangkat lunak, dan banyak lagi.{" "} <Link
              href="https://dhiadhaifullah.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              dhfai.ai
            </Link>.

            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link href="/dashboard">
                  Get Started
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </Link>
              </Button>
            </div>
          </section>
          <div className="w-full flex justify-center relative">
            <Image
              src="/demo-light-min.png"
              width={1080}
              height={608}
              alt="demo"
              priority
              className="border rounded-xl shadow-sm dark:hidden"
            />
            <Image
              src="/demo-dark-min.png"
              width={1080}
              height={608}
              alt="demo-dark"
              priority
              className="border border-zinc-600 rounded-xl shadow-sm hidden dark:block dark:shadow-gray-500/5"
            />
            {/* <Image
              src="/demo-mobile-light-min.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="border rounded-xl absolute bottom-0 right-0 hidden lg:block dark:hidden"
            />
            <Image
              src="/demo-mobile-dark-min.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="border border-zinc-600 rounded-xl absolute bottom-0 right-0 hidden dark:lg:block"
            /> */}
          </div>
        </div>
      </main>
      <footer className="py-6 md:py-0 mx-auto border-t border-border/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            Supported by ❤️{" "}
            <Link
              href="https://emilia.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              emilia/ai
            </Link>
            . The source code is available on{" "}
            <Link
              href="https://github.com/dhfai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
