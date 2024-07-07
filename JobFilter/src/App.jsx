import Item from "./components/Item"
import {useEffect, useState} from "react"
import axios from "axios"


const App = () => {
  const [data, setData] = useState([])
  
  const fetchData = async () => {
    const res = await axios.get("http://localhost:3001/users")
    setData(res.data)
    console.log(res.data);
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <div className="w-full h-full">
        <div className="w-auto h-[156px] bg-[--Primary-Dark-Cyan] bg-[url('./assets/bg-header-mobile.svg')] md:[url('./assets/bg-header-desktop.svg')]"></div>
        {!data ? null : data.map((item)=>(<Item data={item} key={item.id}/>))}
      </div>

    </>
  )
}

export default App