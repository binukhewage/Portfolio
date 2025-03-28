import Link from "next/link";
import { Button } from "./ui/ui/button";

//components
import Nav from "./ui/ui/Nav";
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
        <h1 className="text-4xl font-semibold">BH<span className="text-accent">.</span></h1>
        </Link>




        {/* Dekstop Nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          <Link href="/contact">
          <Button>Reach Me</Button>
          </Link>
        </div>
        

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>



      </div>
    </header>
  )
}

export default Header