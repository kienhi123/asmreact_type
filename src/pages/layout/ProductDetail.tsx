import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../../api/product';
import Navwebsite from '../../commpents/Navwebsite';
import Sile from '../../commpents/Sile';
import { ProductType } from '../../type/Products';

type Props = {}

const ProductDetail = (props: Props) => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType>();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id)
            setProduct(data)
        };
        getProduct();

    }, [])

    return (
        <div>
            <Navwebsite />
            <Sile />
            <div className="grid  grid-cols-1 sm:grid-cols-2  mt-6">
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden pl-4">
                    <img src={product?.img} alt="" />

                </div>
                <div className="w-full  pr-8 font-bold shadow-md overflow-hidden">
                    <h1 className="text-4xl font-bold mt-0 mb-6">Thông Tin Sản Phẩm</h1>
                    <div className="px-5 py-3">
                        <strong className=" text-5xl text-red-900 uppercase">{product?.name}</strong> <br />
                    </div>
                    <p className='text-3xl'>Pice:{product?.price}</p>
                    <p>{product?.desc}</p>
                    <div className="flex space-x-2 justify-center pt-3">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >Đặt Mua</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail