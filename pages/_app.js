import '@/styles/globals.css'
import Navbar from './components/Navbar'
import { initFlowbite } from 'flowbite'
import { useEffect } from 'react'
import Footer from './components/Footer'
export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList.add('bg-white');
    document.body.classList.add('dark:bg-gray-900');
    if(!localStorage.getItem('theme')) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.querySelector('html').classList.add('dark');
        }
        else{
          document.querySelector('html').classList.add('light');
      }
  } else {
      document.querySelector('html').classList.add(localStorage.getItem('theme'));
  }
  }, [])
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
