import React from 'react'
import {useForm,SubmitHandler}  from 'react-hook-form'
import { useNavigate } from "react-router-dom";

type Input = {
  name:string,
  price:number,
  desc:string
}

type AddProps = {
  name:string,
  onAdd:(products:Input)=>void
}

const Add = (props: AddProps) => {
  
  const {register,handleSubmit,formState:{errors}} = useForm<Input>();
  const navigate = useNavigate()

  const onSubmit :SubmitHandler<Input> = (dataInput) =>{
    props.onAdd(dataInput)
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

          <button>Thêm mới</button>
         
         
        </form>


    </div>
  )
}

export default Add