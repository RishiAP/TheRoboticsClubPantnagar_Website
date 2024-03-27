import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | The Robotics Club, Pantnagar</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
    <main>
      <style jsx>
        {
          `
          #home_page_header{
            position: relative;
            min-height: calc(100vh - 4rem);
            height:auto;
          }
          #home_page_header::before {
            content: "";
            background-image: url("/Robot2.png");
            background-position: left top;
            background-repeat: no-repeat;
            background-size: contain;
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            opacity: 0.55;
            z-index: -1;
          }
          #home_page_header::after {
            content: "";
            background-image: url("/Robot1.png");
            background-position: right top;
            background-size: contain;
            background-repeat: no-repeat;
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            opacity: 0.55;
            z-index: -1;
          }
          @media only screen and (max-width: 500px){
            #home_page_header::before {
              opacity:0.45;
            }
          }
          @media only screen and (max-width: 700px){
            #home_page_header::before {
              background-position: center;
              background-size: cover;
              width: 100%;
              height: 100%;
            }
            #home_page_header::after {
              display: none;
            }
          }
          `
        }
      </style>
      <header id="home_page_header" className='px-4 sm:px-6 md:px-8'>
      <div className='relative max-w-6xl mx-auto pt-20 sm:pt-24 lg:pt-32'>
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">Together We Achieve More: A Culture of Teamwork</h1>
    <p className="mb-6 text-lg lg:font-normal text-neutral-800 font-bold lg:text-xl sm:px-16 xl:px-24 text-center dark:text-zinc-50">Welcome to The Robotics Club, Pantnagar - where teamwork makes the dream work! We're a community of collaborative minds dedicated to exploring the endless possibilities of robotics. Join us as we work, learn, and achieve together.</p>
      </div>
      </header>
      <section id="latestUpdates">
      <h2 className="text-4xl font-extrabold dark:text-white text-center">Latest Updates</h2>
      


      </section>
    </main>
    </>
  )
}