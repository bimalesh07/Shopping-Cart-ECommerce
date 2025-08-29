import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

const Search = () => {
  const { term } = useParams();
  const [Namesearch, setNamesearch] = useState([])

useEffect(() => {
  const filterData = () =>{
    const data = items.filter((p)=> p.title.toLowerCase().includes(term.toLowerCase()))
    setNamesearch(data)
  }

  filterData();

}, [term])

 
  return (
    <div>
      <>
      <Product items={Namesearch}/>
      </>
    </div>
  )
}

export default Search
