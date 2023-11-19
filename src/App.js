import { Container } from 'react-bootstrap'
import NavBar from './components/navbar.jsx'
import Header from './components/header.jsx'
import Category from './components/category.jsx'
import ItemList from './components/itemList.jsx'
import { item } from './data.jsx'
import './App.css'
import { useState } from 'react'

function App () {
  const [itemsData, setItemData] = useState(item)
  const allCategory =['الكل',...new Set(item.map((i)=>i.category))];

  const filterByCategory = cat => {
    if (cat === 'الكل') {
      setItemData(item)
    } else {
      const categoryList = item.filter(item => item.category === cat)
      setItemData(categoryList)
    }
  }

  const search = word => {
    if (word !=='' ) {
      const categoryList = item.filter(item => item.title === word)
      setItemData(categoryList)
    }
  }
  return (
    <div className='color-body font'>
      <NavBar searchItem ={search} />
      <Container>
        <Header />
        <Category filterName={filterByCategory}categoryList={allCategory}/>
        <ItemList items={itemsData} />
      </Container>
    </div>
  )
}

export default App
