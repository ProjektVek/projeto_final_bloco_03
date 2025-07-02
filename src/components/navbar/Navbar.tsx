import { ShoppingCart, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div
			className="w-full bg-indigo-900 text-white
                flex justify-center py-4"
		>
			<div className="container flex justify-between text-lg">
				<Link to="/" className="hover:underline">
					<img
						src="https://ik.imagekit.io/vek/farmacia/logo.png?updatedAt=1751466088016"
						alt="Logo da farmácia"
						className="h-10"
					/>
				</Link>
                
				<div className="flex gap-4">
					<Link to="/categorias" className="hover:underline">
						Categorias
					</Link>
					<Link to="/cadastrarcategoria" className="hover:underline">
						Cadastrar Categoria
					</Link>
					<User size={36} color="#ffffff" />
					<ShoppingCart size={36} color="#ffffff" />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
