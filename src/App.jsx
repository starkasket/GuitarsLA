
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';
import { db } from './data/db';
import Guitar from "./components/Guitar"

function App() {
    // Lógica y CSS


    // const [auth, setAuth] = useState(false);
    const [data] = useState(db);
    const [cart, setCart] = useState(initialCart);

    function initialCart() {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : []
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart);

    }, [cart])

    const MIN_ITEMS = 1;
    const MAX_ITEMS = 5;

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

    function addToCart(item) {
        const itemExists = cart.findIndex((guitar) => guitar.id == item.id); //regresa el elemento con el mismo id y regresa el idice
        if (itemExists >= 0) {
            if (cart[itemExists].quantity >= MAX_ITEMS) return;
            const updatedCart = [...cart];
            updatedCart[itemExists].quantity++;
            setCart(updatedCart);
        } else {
            item.quantity = 1;
            setCart([...cart, item]); //se copia el carrito
        }
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart);
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity < MAX_ITEMS) {

                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })

        setCart(updatedCart);
    }

    function removeFromCart(id) {
        setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id))
    }


    function clearCart(e) {
        setCart([]);
    }

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
