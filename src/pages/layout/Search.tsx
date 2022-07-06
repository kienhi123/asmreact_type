import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { search } from '../../api/product'
import Footer from '../../commpents/Footer'
import Navwebsite from '../../commpents/Navwebsite'
import { ProductType } from '../../type/Products'

type Props = {}

const Search = (props: Props) => {
    const { search_value } = useParams()
    const [search_ilitial, setSearch] = useState<ProductType[]>([])

    useEffect(() => {
        const searchs = async () => {
            const { data } = await search(search_value)
            console.log(data)
            setSearch(data)
        }
        searchs()
    }, [search_value])
    return (
        <div>
            <Navwebsite/>
            <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
            {/* ====== Cards Section Start */}
            <div className="  bg-[#F3F4F6] ">
                <div className="container">
                    <h3 className="text-gray-700 text-2xl font-medium">Kết quả tìm kiếm</h3><hr />
                    <div className="mx-auto ">
                        <div className="grid gap-6 grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                            {search_ilitial.map((item, index) => {
                                return (

                                    <div className="bg-white rounded-lg overflow-hidden mb-10 " key={index}>
                                        <img src={item.img} alt="image" className="w-full max-auto   hover:scale-110 transition duration-300 ease-in-out" />
                                        <div className=" text-center">
                                            <h3>
                                                <Link to={`/products/${item._id}`} className="
                          font-semibold
                          text-dark text-xl
                          sm:text-[22px]
                          md:text-xl
                          lg:text-[22px]
                          xl:text-xl
                          2xl:text-[22px]
                          mb-4
                          block
                          hover:text-primary
                          ">

                                                    {item.name}
                                                </Link>
                                            </h3>
                                            <p className="text-base text-body-color leading-relaxed mb-7">
                                                {item.price}
                                            </p>
                                            <Link to={`/products/${item._id}`} className="
                       inline-block
                       py-2
                       px-7
                       border border-[#E5E7EB]
                       rounded-full
                       text-base text-body-color
                       font-medium
                       hover:border-primary hover:bg-primary hover:text-white
                       transition
                       ">
                                                Xem chi tiết
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>


                    </div>
                </div>
            </div>
            {/* ====== Cards Section End */}
            <Footer/>
        </div>
    )
}

export default Search