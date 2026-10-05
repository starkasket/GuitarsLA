
import './App.css'
import Header from './components/Header';
import Guitar from "./components/Guitar"
import { useCart } from './hooks/useCart';

function App() {

    const { cart, data, addToCart, decreaseQuantity, increaseQuantity, removeFromCart, clearCart  } = useCart();
    // Lógica y CSS


    // const [auth, setAuth] = useState(false);


   

    //console.log(data);

    /*   function handlerClick(item) {
  
          const guitarExist = cart.findIndex((guitar) => guitar.id === item.id)
          console.log(guitarExist);
          if (guitarExist > (-1)) {
              item.quantity++;
          } else {
              setCart(prevCart => [...cart, item]);
          }
  
          console.log(item.quantity);
          console.log(item);
  
          console.log(cart);
  
      } */

    /*   data.forEach(guitar => {
          console.log("Guitarra encontrada: " + guitar.name);
          
      });
   */

    /*  data.map((guitar) => {
         console.log("Guitarra encontrada: " + guitar.name);    
     }) */

    /* ERROR
    if (auth) {
        const [ref, setRef] = useState([]);
    }
    */

    // useEffect

    /*   useEffect(() => {
          // Acción al cargar el componente
          console.log("Componente listo");
  
  
      }, [])
  
      useEffect(() => {
          // Acción al cargar el componente
          console.log("Token cambió");
      }, [auth])
  
      setTimeout(() => {
          setAuth(true);
          setTotal(100);
      }, 3000) */


    return (
        // Fragment 
        <>
            <Header
                cart={cart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}

            />


            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((guitar) => (
                        <Guitar
                            key={guitar.id}
                            guitar={guitar}
                            addToCart={addToCart}
                        />
                    ))}

                </div>
            </main>


            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export default App
