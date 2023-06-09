import { useLoaderData } from "react-router"
import AllProducts from "../components/AllProducts"
import Banner from "../components/Banner"
import { useState, useEffect } from "react"
const Home = () => {
const [products, setProducts] = useState([])
const data = useLoaderData()
console.log(data.data)



  useEffect(() => {
    setProducts(data.data)
  
  }, [data])
  
  return (
    <div>
        <Banner/>
        <AllProducts products={products}/>
    </div>
  )
}

export default Home