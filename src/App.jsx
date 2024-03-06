
import './App.css'
import FeedBack from './components/FeedBackComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import NavbarComponent from './components/NavbarComponent.jsx'
import ProductCardComponent from './components/ProductCardComponent.jsx'
import { userFeedbacks } from './data/feedback.js'
import { products } from './data/product.js';

const App =() => {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <NavbarComponent />
      <main className='p-20'> 
      {/* Product section */}
        <section className='flex justify-between'>
          {products.map((product) => (
            <ProductCardComponent key={product.id} product={product}/>
          ))}
        </section>

        {/* Feedback section */}
        <section className='flex justify-between mt-10'>
          {userFeedbacks.map((feedback) => (
            <FeedBack key={feedback.id} feedback={feedback}/>
          ))}
        </section>
      </main>
      <FooterComponent />
    </div>
    
  )
}

export default App
