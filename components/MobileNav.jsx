"use client";

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent'/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className='mb-42 mb-48 text-center text-2xl'>
                    <Link href="/">
                        <h1 className='text-4xl font-semibold'>
                            BH<span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                onClick={handleLinkClick}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                                    } text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
