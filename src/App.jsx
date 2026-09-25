
import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import { db } from './data/db';
import Guitar from "./components/Guitar"

function App() {
    // Lógica y CSS


    // const [auth, setAuth] = useState(false);
    const [data, setData] = useState(db);
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState([]);

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

    function handlerClick(item) {
        const guitarExist = cart.findIndex((guitar) => guitar.id === item.id);

        if (guitarExist >= 0) {
            const updatedCart = [...cart];

            updatedCart[guitarExist].quantity++;

            setCart(updatedCart);
            console.log(cart);

        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
            console.log(cart);

        }

    }

    function handlerAdd(item) {

        const guitarExist = cart.findIndex((guitar) => guitar.id === item.id);


        const updatedCart = [...cart];
        if (updatedCart[guitarExist].quantity < 5) {
            updatedCart[guitarExist].quantity++;
            setCart(updatedCart);
        } else {
            console.log("Has alcanzado un máximo de guitarras.");

        }
    }
    function handlerSubstract(item) {

        const guitarExist = cart.findIndex((guitar) => guitar.id === item.id);


        const updatedCart = [...cart];
        if (updatedCart[guitarExist].quantity > 1) {
            updatedCart[guitarExist].quantity--;
            setCart(updatedCart);
        } else {
            console.log(`Has eliminado: ${item.name} de tu carrito de compras.`);
            updatedCart[guitarExist].quantity--;
            const finalCart = (prevGuitars) => prevGuitars.filter((guitar) => guitar !== updatedCart[guitarExist]);

            setCart(finalCart)

        }
    }

    function handlerDelete(item) {
        const guitarExist = cart.findIndex((guitar) => guitar.id === item.id);
        const updatedCart = [...cart];
        const finalCart = (prevGuitars) => prevGuitars.filter((guitar) => guitar !== updatedCart[guitarExist]);

        setCart(finalCart)
    }

    function handlerEmpty() {
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
                handlerAdd={handlerAdd}
                handlerSubstract={handlerSubstract}
                handlerDelete={handlerDelete}
                handlerEmpty={handlerEmpty}

            />


            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((guitar) => (
                        // <p> Desde Guitarra: {guitar.name}</p>

                        <Guitar
                            key={guitar.id}
                            guitar={guitar}
                            handlerClick={() => handlerClick(guitar)}
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
