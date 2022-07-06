import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <div className="mb-16">
        <footer className="text-gray-600 body-font bg-gray-700">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                <img src="" alt="" />
                <span className="ml-3 text-5xl text-red-900 pt-5">HONDA</span>
              </a>
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">TRANG CHỦ</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-white hover:text-red-300" href="#">First Link</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">Second Link</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">Third Link</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">SẢN PHẨM</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-white hover:text-red-300" href="#">First Link</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">Second Link</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">Third Link</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">LIÊN HỆ</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-white hover:text-red-300" href="#">First Link</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">Second Link</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">Third Link</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <div className="md:mb-6">
          <input
            type="text"
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleFormControlInput1"
            placeholder="Email address"/>
        </div>

        <div className="">
          <button  type="button" className="inline-block p-4 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe</button>
        </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-white text-sm text-center sm:text-left">© 2020 Dev —
                <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">@Developer</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a className="text-gray-200">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-200">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-200">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-200">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>



    </div>
  )
}

export default Footer