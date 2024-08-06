import Link from "next/link";
import "./navbar.css";
import MobileMenu from "../shadcn-applied/mobilemenu/mobilemenu";
import { CoffeeIcon } from 'lucide-react';

export default function Navbars() {
  return (
    <div className="Navbars">
        <nav className="nav-desk">
            <div className="nav-desk-l"></div>
            <div className="nav-desk-r">
                <Link href={"/"}>Inicio</Link>
                <Link href={"/"}>Carta</Link>
                <Link href={"/"}>Contacto</Link>
                <Link href={"/"}>Repositorio</Link>
            </div>
        </nav>
        <nav className="nav-mobile">
            <MobileMenu/>
            <Link href={"/"}>Logo</Link>
            <button><CoffeeIcon size={34}/></button>
        </nav>
    </div>
  )
}
