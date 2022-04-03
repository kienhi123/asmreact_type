import React from 'react'
import Footer from './Footer'
import Navwebsite from './Navwebsite'
import Sile from './Sile'

type Props = {}

const Lienhe = (props: Props) => {
    return (
        <div>
            <Navwebsite />
            <Sile />
            <h1 className="text-4xl font-bold mt-0 pt-3 mb-6">Thông Tin Liên Hệ</h1>

            <div className="grid  grid-cols-1 sm:grid-cols-2  mt-6">
                <div className="w-10/12 mx-auto rounded-md shadow-md overflow-hidden ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8638558814237!2d105.74459841475502!3d21.03813279283455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1648985607564!5m2!1svi!2s" width="1500" height="500" loading="lazy" ></iframe>
                </div>
                <form>

                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="Tên khách hàng" />
                        </div>
                        <div className="form-group mb-6">
                            <input type="number" className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="Số Điện Thoại" />
                        </div>
                        <div className="form-group mb-6" />
                        <input type="email" className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                            placeholder="Email address" />
                        <textarea
                        
                            className="
          form-control
          block
          w-full
          px-3
          py-1.
          pr-4
          pt-4
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
                            rows={2} cols={3}
                            placeholder="Nội Dung"
                        ></textarea>
                    </div>
                           <div className='pt-3'>
                    <button type="submit" className="inline-block pt-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs  uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Gửi yêu cầu</button>
                    </div >
                </form>
             
            </div >
            <Footer/>
        </div >
    
    )
}

export default Lienhe