import { ShoppingCart, User } from "@phosphor-icons/react"

function Navbar() {
  return (
    <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>
    
        <div className="container flex justify-between text-lg">
            <img src="../../../src/assets/logo.png" alt="Logo da farmácia"  className="h-10"/>

            <div className='flex gap-4'>
              Categorias
              Cadastrar Categoria
              <User size={36} color="#ffffff" />
              <ShoppingCart size={36} color="#ffffff" />
            </div>
        </div>
    </div>
  )
}

export default Navbar