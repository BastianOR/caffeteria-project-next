import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import "./mobilemenu.css";
import { AlignLeft } from "lucide-react";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger><AlignLeft size={43} strokeWidth={3} /></SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Logo de Cafetería</SheetTitle>
        </SheetHeader>
        <div className="mobile-menu-links">
            <Link href={"/"}>Inicio</Link>
            <Link href={"/"}>Carta</Link>
            <Link href={"/"}>Contacto</Link>
            <Link href={"/"}>Repositorio</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
