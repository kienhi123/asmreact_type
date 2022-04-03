import './App.css'
import { Routes, Route } from 'react-router-dom'
import Websitelayout from './pages/layout/Websitelayout'
import Signup from './pages/layout/Signup'
import 'tw-elements';
import { useEffect, useState } from 'react'
import Adminlayout from './pages/layout/Adminlayout';
import Add from './pages/layout/Add';
import List from './pages/layout/List';
import { ProductType } from './type/Products';
import { add, list, remove, update } from './api/product';
import Edit from './pages/layout/Edit';
import { signup } from './api/user';
import Signin from './pages/layout/Signin';
import ProductDetail from './pages/layout/ProductDetail';
import Blog from './commpents/Blog';
import Lienhe from './commpents/Lienhe';
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [users, setUser] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);
  // xóa
  const onHandleremove = async (id: number) => {
    remove(id)
    setProducts(products.filter(item => item._id !== id));
  }
  // thêm
  const onhandlerAdd = async(product:any)=>{
    const {data} = await add (product)
    setProducts([...products,data])
  }

  // sửa
  const onhanderUpdate = async (product:ProductType)=>{
        try {
          const {data} = await update (product);
          setProducts(products.map(item => item._id === data._id ? product : item))
        } catch (error) {        
        }
  }
  // sigin
  const onHandleSignup = async (user:any) =>{
    const {data} = await signup(user)
    setUser([...users, data]);
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Websitelayout  products={products}/>} />
        <Route path='/signup' element={<Signup name='kien' onAdd={onHandleSignup} />} />
        <Route path='/admin' element={<Adminlayout />} />
        <Route path='/add' element={<Add name='kien' onAdd={onhandlerAdd}/>} />
        <Route path='/list' element={<List products={products} onRemove={onHandleremove}/>} />
        <Route path='/products/:id/edit' element={<Edit onUpdate={onhanderUpdate}/>} />
        <Route path='/signin' element={<Signin/>} />

        <Route path='/products/:id' element={<ProductDetail/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/lienhe' element={<Lienhe/>} />

      </Routes>

      
    </div>
  )
}

export default App
