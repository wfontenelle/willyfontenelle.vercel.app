import React from "react";
import Head from "next/head";
import {
  BsFillMoonStarsFill,
  BsLinkedin,
  BsGithub,
  BsBehance,
  BsMedium,
  BsSunFill,
} from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { SiNotion } from "react-icons/si";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import avatar from "../public/Avatar.png";
import wineCover from "../public/wine_cover.jpg";
import hurbCover from "../public/hurb_cover.jpg";
import inaiahCover from "../public/inaiah.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Willy Fontenelle</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Willy Fontenelle" />
        <meta property="og:description" content="Product Designer" />
        <meta
          property="og:image"
          content="https://willyfontenelle.vercel.app/image.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900 md:px-20 lg:px-40 transition-color duration-700">
        <section className="grid max-w-screen-md mx-auto">
          <section className="min-h-48">
            <nav className="pt-6 pb-2 mb-0 flex justify-center">
              <ul className="flex items-center">
                <li>
                  <div
                    className={`cursor-pointer text-2xl ${darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                      } transition-color duration-700 `}
                    onClick={() => setDarkMode(!darkMode)}
                    title="Switch mode"
                  >
                    {darkMode ? <BsFillMoonStarsFill /> : <BsSunFill />}
                  </div>
                </li>
                {/* <li>
                  <a
                    className={`bg-blue-600 text-white py-3 px-4 border-none rounded-md ml-8 ${darkMode
                        ? "hover:bg-blue-700 active:bg-blue-800"
                        : "hover:bg-blue-700 active:bg-blue-800"
                      } focus:outline-none`}
                    href="/resumeWilly-en_compressed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="PDF Curriculum Vitae"
                  >
                    Resume
                  </a>
                </li> */}
              </ul>
            </nav>

            <div className="text-center px-6 pt-4 pb-8 sm:px-10 sm:pt-6 sm:pb-10">
              <h2 className="text-4xl py-2 text-blue-600 font-bold dark:text-blue-500 md:text-6xl transition-color duration-700">
                Willy Fontenelle
              </h2>

              <h3 className="text-2xl py-2 text-gray-500 dark:text-gray-400 md:text-2xl transition-color duration-700">
                Product Designer
              </h3>
              <p className="text-md py-5 leading-6 text-gray-600 dark:text-gray-200 max-w-sm md:max-w-md mx-auto md:text-md transition-color duration-700">
                Desenvolvimento de negócios digitais que convertem, escalam e funcionam na prática.
              </p>
                            <div className="text-4xl flex justify-center gap-4 py-3">
                <a
                  href="https://willyfontenelle.notion.site/Willy-Fontenelle-1bc7670875b94183af99e05b22d550e0?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Notion"
                >
                  <span
                    className={`cursor-pointer ${darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                      } transition-color duration-700`}
                  >
                    <SiNotion />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/willyfontenelle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className={`cursor-pointer ${darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                      } transition-color duration-700`}
                  >
                    <BsLinkedin />
                  </span>
                </a>
                <a
                  href="https://github.com/wfontenelle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className={`cursor-pointer ${darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                      } transition-color duration-700`}
                  >
                    <BsGithub />
                  </span>
                </a>
                <a
                  href="https://www.behance.net/willyfontenelle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className={`cursor-pointer ${darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                      } transition-color duration-700`}
                  >
                    <BsBehance />
                  </span>
                </a>
                <a
                  href="https://medium.com/@willyfontenelle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className={`cursor-pointer ${darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                      } transition-color duration-700`}
                  >
                    <BsMedium />
                  </span>
                </a>
                <a
                  href="https://www.figma.com/@willyfontenelle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    className={`cursor-pointer ${darkMode
                        ? "text-white hover:text-gray-200 active:text-gray-400"
                        : "text-gray-500 hover:text-gray-700 active:text-black"
                      } transition-color duration-700`}
                  >
                    <FiFigma />
                  </span>
                </a>
              </div>
            </div>

            <div>
              <ul className="flex justify-center">
                <li className="rounded-full w-56 h-56 relative overflow-hidden mb-16 md:h-80 md:w-80">
                  <Image
                    src={avatar}
                  alt="avatar"
                  fill
                  sizes="100vw"
                />
                </li>
              </ul>
            </div>
          </section>

          <section className="pb-16">
            <div className="flex justify-between items-center px-5 pb-4">
              <h3 className="text-2xl font-medium text-gray-600 dark:text-white">
                Cases
              </h3>
              <a
                href="https://willyfontenelle.notion.site/Willy-Fontenelle-1bc7670875b94183af99e05b22d550e0?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Ver todos no Notion →
              </a>
            </div>

            <div className="block space-y-6">
              {/* Case 1: Wine */}
              <div className="text-left pt-4 pb-4 px-5 dark:text-white md:space-x-4">
                <div className="md:flex md:flex-1 md:gap">
                  <div className="rounded-md overflow-hidden relative h-52 w-full object-cover md:w-1/2 md:h-auto">
                    <a
                      href="https://willyfontenelle.notion.site/wine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative h-52 md:h-full w-full"
                    >
                      <Image
                        src={wineCover}
                        alt="Wine"
                        fill
                        sizes="100vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </a>
                  </div>
                  <div className="pt-4 md:pt-0 md:w-1/2 md:pl-4 space-y-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      <a
                        href="https://willyfontenelle.notion.site/wine"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-gray-800 dark:text-white"
                      >
                        Wine
                      </a>
                    </h3>
                    <p className="text-xs text-gray-400 dark:text-gray-400 italic pb-1">
                      Jan/2019 – Jun/2021 · Product Designer
                    </p>
                    <p className="text-md text-gray-600 dark:text-gray-200">
                      Como redesenhei o aplicativo de vendas por relacionamento da Wine: um ecossistema completo responsável pelo crescimento de 64% em faturamento, mais que o dobro em vendas e resultando na aquisição estratégica do canal.
                    </p>
                    <p className="text-gray-400 py-1 text-xs dark:text-gray-400">
                      #product design #ux #ui #design system #research #app #dashboard #e-commerce #visual design #user flow
                    </p>
                    <p className="text-gray-400 text-xs dark:text-gray-400 pb-2">
                      <span className="font-medium">tools:</span> figma, adobe suite
                    </p>
                    <a
                      href="https://willyfontenelle.notion.site/wine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline inline-block"
                    >
                      Acessar case no Notion →
                    </a>
                  </div>
                </div>
              </div>

              {/* Case 2: Hotel Urbano */}
              <div className="text-left pt-4 pb-4 px-5 dark:text-white md:space-x-4">
                <div className="md:flex md:flex-1 md:gap">
                  <div className="rounded-md overflow-hidden relative h-52 w-full object-cover md:w-1/2 md:h-auto">
                    <a
                      href="https://willyfontenelle.notion.site/hurb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative h-52 md:h-full w-full"
                    >
                      <Image
                        src={hurbCover}
                        alt="Hotel Urbano"
                        fill
                        sizes="100vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </a>
                  </div>
                  <div className="pt-4 md:pt-0 md:w-1/2 md:pl-4 space-y-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      <a
                        href="https://willyfontenelle.notion.site/hurb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-gray-800 dark:text-white"
                      >
                        Hotel Urbano
                      </a>
                    </h3>
                    <p className="text-xs text-gray-400 dark:text-gray-400 italic pb-1">
                      Jan/2022 – Jun/2023 · Senior Design System Analyst
                    </p>
                    <p className="text-md text-gray-600 dark:text-gray-200">
                      Como criei o primeiro design system de uma empresa de turismo com 10 squads e destravei R$288k em capacidade de entrega com 82% de adoção.
                    </p>
                    <p className="text-gray-400 py-1 text-xs dark:text-gray-400">
                      #design system #product design #ui #ux #frontend #design ops #branding
                    </p>
                    <p className="text-gray-400 text-xs dark:text-gray-400 pb-2">
                      <span className="font-medium">tools:</span> figma, storybook, adobe suite, notion, google analytics
                    </p>
                    <a
                      href="https://willyfontenelle.notion.site/hurb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline inline-block"
                    >
                      Acessar case no Notion →
                    </a>
                  </div>
                </div>
              </div>

              {/* Case 3: Hanna Inaiáh */}
              <div className="text-left pt-4 pb-4 px-5 dark:text-white md:space-x-4">
                <div className="md:flex md:flex-1 md:gap">
                  <div className="rounded-md overflow-hidden relative h-52 w-full object-cover md:w-1/2 md:h-auto">
                    <a
                      href="https://willyfontenelle.notion.site/hannainaiah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative h-52 md:h-full w-full"
                    >
                      <Image
                        src={inaiahCover}
                        alt="Hanna Inaiáh"
                        fill
                        sizes="100vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </a>
                  </div>
                  <div className="pt-4 md:pt-0 md:w-1/2 md:pl-4 space-y-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      <a
                        href="https://willyfontenelle.notion.site/hannainaiah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-gray-800 dark:text-white"
                      >
                        Hanna Inaiáh
                      </a>
                    </h3>
                    <p className="text-xs text-gray-400 dark:text-gray-400 italic pb-1">
                      2021 – 2025 · Product, Growth & Design Ops
                    </p>
                    <p className="text-md text-gray-600 dark:text-gray-200">
                      Como transformei a audiência orgânica da artista num estúdio que fatura R$220k por ano, unindo a qualidade do trabalho dela com minha bagagem de produto, growth e tecnologia.
                    </p>
                    <p className="text-gray-400 py-1 text-xs dark:text-gray-400">
                      #branding #design ops #design growth #webdesign #no code #low code #ai #seo #automation #crm #e-commerce #landing page
                    </p>
                    <p className="text-gray-400 text-xs dark:text-gray-400 pb-2">
                      <span className="font-medium">tools:</span> shopify, wix, hotjar, google analytics, meta ads, google ads, manychat, figma, notion, adobe suite
                    </p>
                    <a
                      href="https://willyfontenelle.notion.site/hannainaiah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline inline-block"
                    >
                      Acessar case no Notion →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-xs text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Willy Fontenelle • Product Designer</p>
          </footer>
        </section>
      </main>
    </div>
  );
}
