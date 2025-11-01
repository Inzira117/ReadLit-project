
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import SearchBar from './SearchBar/SearchBar'
import { useState } from 'react'
import { getBooks } from './api'




const App: React.FC = () => {
  

  return (
    <div className="w-100 min-vh-100 bg-light">
      <Header />
    
      <Main />
      <Footer />
    </div>
  )
}

export default App
