import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
const Navbar = () => {
  const changeTheme = () => {
      if(theme=="dark") {
          setTheme("light");
          localStorage.setItem('theme', 'light');
          document.querySelector('html').classList.remove('dark')
          document.querySelector('html').classList.add('light')
      } else {
          setTheme("dark");
          localStorage.setItem('theme', 'dark');
          document.querySelector('html').classList.add('dark')
          document.querySelector('html').classList.remove('light')
      }
  }
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if(!localStorage.getItem('theme')) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setTheme("dark");
        }
        else{
          setTheme("light");
      }
  } else {
    setTheme(localStorage.getItem('theme'));
  }
  }, []);
    const router=useRouter();
    const linkActive="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent";
    const linkInactive="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  return (
    

<nav className="bg-white sticky top-0 z-[1] border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div className="flex flex-wrap items-center mx-auto p-4">
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse mr-auto">
    <Image src="/TheRoboticsClubPantnagarLogo.png" width={37} height={32} alt="The Robotics Club Logo"/>
        <span className="self-center sm:text-2xl text-xl font-semibold whitespace-nowrap dark:text-white">The Robotics Club</span>
    </Link>
    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link href="/" className={router.route==="/"?linkActive:linkInactive} aria-current="page">Home</Link>
        </li>
        <li>
          <Link href="/about" className={router.route==="/about"?linkActive:linkInactive}>About Us</Link>
        </li>
        <li>
          <Link href="/events" className={router.route==="/events"?linkActive:linkInactive}>Events</Link>
        </li>
        <li>
          <Link href="/projects" className={router.route==="/projects"?linkActive:linkInactive}>Projects</Link>
        </li>
        <li>
          <Link href="/contact" className={router.route==="/contact"?linkActive:linkInactive}>Contact</Link>
        </li>
      </ul>
    </div>
    <div className='flex items-center gap-1 absolute md:static top-3 right-[1rem]'>
    <button id="theme-toggle" type="button" className="text-gray-500 ml-4 inline-flex items-center justify-center dark:text-gray-400 hover:bg-gray-100 w-10 h-10 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" onClick={changeTheme}>
        <svg id="theme-toggle-dark-icon" className={`w-4 h-4 ${theme=="dark"?"hidden":""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
          <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
        </svg>
        <svg id="theme-toggle-light-icon" className={`w-4 h-4 ${theme=="dark"?"":"hidden"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
        </svg>
        <span className="sr-only">Toggle dark mode</span>
      </button>
    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    </div>
  </div>
</nav>

  )
}

export default Navbar