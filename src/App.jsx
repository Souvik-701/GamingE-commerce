import './App.css'
import BestDeals from './sections/BestDeals/BestDeals.jsx'
import BestSelling from './sections/BestSelling/BestSelling.jsx'
import Discount from './sections/Discount/Discount.jsx'
import Header from './sections/Header/Header.jsx'
import Hero from './sections/HeroSection/Hero.jsx'
import Navbar from './sections/Navbar/Navbar.jsx'
import Trending from './sections/Trending/Trending.jsx'

function App() {
  

  return (
    <>
      <Header/>
      <Navbar/>
      <Hero/>
      <BestSelling/>
      <Trending/>
      <Discount/>
      <BestDeals/>
    </>
  )
}

export default App
