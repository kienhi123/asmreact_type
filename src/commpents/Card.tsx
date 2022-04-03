import React from 'react'
import { ProductType } from '../type/Products'

type PropsCard = {
    products:ProductType[];
};

const Card = ({products}: PropsCard) => {
  return (
    <main className="my-8">
    <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">News 20022</h3><hr />
        <span className="mt-3 text-sm text-gray-500">HONDA</span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                {products?.map(product=>{
                return(

                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                    <img  className="flex items-end justify-end h-56 w-full bg-cover max-w-xs hover:scale-110 transition duration-300 ease-in-out" src={product.img} alt="" />
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                
                <div className="px-5 py-3">
                    <a href={`/products/${product._id}`}>
                    <strong className=" text-xl uppercase">{product.name}</strong> <br />
                    </a>
                </div>
            </div>
                )
        })}
    
            {/* <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover max-w-xs hover:scale-110 transition duration-300 ease-in-out" style={{ backgroundImage: 'url("http://media.doisongphapluat.com/514/2016/11/23/phien-ban-honda-4.jpg")' }}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className="px-5 py-3">
                    <strong className=" text-xl uppercase">Dream 2022</strong> <br />
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover max-w-xs hover:scale-110 transition duration-300 ease-in-out" style={{ backgroundImage: 'url("https://honduraseducacional.com/wp-content/uploads/2021/09/mau-xe-may-moi-2021-2.jpg")' }}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className="px-5 py-3">
                    <strong className="text-xl uppercase">Honda Air Blade</strong>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover max-w-xs hover:scale-110 transition duration-300 ease-in-out" style={{ backgroundImage: 'url("http://media.doisongphapluat.com/514/2016/11/28/gia-xe-sh-thang12-2.jpg")' }}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className="px-5 py-3">
                    <strong className="text-xl uppercase">Honda SH 150i</strong>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover max-w-xs hover:scale-110 transition duration-300 ease-in-out" style={{ backgroundImage: 'url("https://image.bnews.vn/MediaUpload/Org/2020/08/12/144532-frontview-1-.jpg")' }}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className="px-5 py-3">
                    <strong className="text-xl uppercase">Wave</strong>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover max-w-xs hover:scale-110 transition duration-300 ease-in-out" style={{ backgroundImage: 'url("https://thuongmotor.com/wp-content/uploads/2019/11/xe-honda-cbr150r-2020-den.jpg")' }}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className="px-5 py-3">
                    <strong className="text-xl uppercase">Honda R15V3</strong>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover max-w-xs hover:scale-110 transition duration-300 ease-in-out"style={{ backgroundImage: 'url("https://www.tinoto.net/wp-content/uploads/2021/06/honda-gold-wing-2021.jpg")' }}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className="px-5 py-3">
                    <strong className="text-xl uppercase">Honda Gold Wing</strong>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover max-w-xs hover:scale-110 transition duration-300 ease-in-out" style={{ backgroundImage: 'url("https://image.bnews.vn/MediaUpload/Org/2020/10/29/winner-x-bike-sport.jpg")' }}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className="px-5 py-3">
                    <strong className="text-xl uppercase">Winer X</strong>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <a className='max-w-xs hover:scale-110 transition duration-300 ease-in-out' href="">
                <div className="flex items-end justify-end h-56 w-full bg-cover max-w-xs hover:scale-110 transition duration-300 ease-in-out " style={{ backgroundImage: 'url("https://image-us.24h.com.vn/upload/4-2021/images/2021-11-17/2022-Honda-Navi-110-trinh-lang-hut-hon-gioi-tre-do-thi-honda1-1637163719-443-width660height512.jpg")' }}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                </a>
                <div className="px-5 py-3">
                    <strong className="text-xl uppercase">HONDA REBEL 300</strong>
                </div>
            </div>       */}
        </div>
      
    </div>
    <iframe className='pt-4' width="1500" height="315" src="https://www.youtube.com/embed/SBOAMiZWAqA" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

</main>

  )
}

export default Card