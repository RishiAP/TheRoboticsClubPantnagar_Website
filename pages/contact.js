import Head from 'next/head'
import React from 'react'

const Contact = () => {
  function handleContactSubmit(e){
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
      })
    }).then(async response => {
      if(response.ok){
        console.log(await response.json());
      }else{
        console.log(await response.json());
      }
    }
    ).catch(error => {
      console.log(error);
    });
  }
  return (
    <>
    <Head>
      <title>Contact | The Robotics Club, Pantnagar</title>
      <meta name="description" content="Contact" />
    </Head>
    <style jsx>
      {
        `
        #contact_section{
          position: relative;
          min-height: calc(100vh - 4rem);
          height:auto;
        }
        #contact_section::before {
          content: "";
          background-image: url("/contact_robo.png");
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
        #contact_section::after {
          content: "";
          background-image: url("/contact_robo2.png");
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
        @media only screen and (max-width: 1400px){
          #contact_section::after {
            background-size: cover;
            width: 100%;
            height: 100%;
          }
          #contact_section::before {
            display: none;
          }
        `
      }
    </style>
    <section id='contact_section'>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about any event? Need details about our Club? Let us know.</p>
      <form onSubmit={handleContactSubmit} className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
      </form>
  </div>
</section>
</>
  )
}

export default Contact