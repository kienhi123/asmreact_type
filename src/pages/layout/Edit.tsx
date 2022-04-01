import React,{useEffect} from 'react'
import {useForm,SubmitHandler}  from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom";
import { read } from '../../api/product';

type Input = {
  name:string,
  price:number,
  desc:string
}

type EditProps = {
  onUpdate:(products:Input)=>void
}

const Edit = (props: EditProps) => {
  
  const {register,handleSubmit,formState:{errors},reset} = useForm<Input>();
  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
      const getProducts= async()=>{
          const{data}= await read(id);
          reset(data)
      }
      getProducts();
  },[])
  const onSubmit :SubmitHandler<Input> = data =>{
    props.onUpdate(data)
    navigate('/list')

  }
  // Call API
  return (
    <div>
        <h2>Thêm thông tin</h2>
       <form onSubmit={handleSubmit(onSubmit)}>
           <label htmlFor="">Name</label>
       <input className='border' type="text" {...register('name',{required:true})} /> <br />
         {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
         <label htmlFor="">Price</label>
         <input  className='border'type="number" {...register('price')} />
         <label htmlFor="">Mô tả</label>
         <input className='border' type="text" {...register('desc',{required:true})} />

          <button>Update</button>
         
         
        </form>


    </div>
  )
}

export default Edit