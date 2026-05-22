'use client'

import { useState } from "react"
import logo from "@/assets/petbuddy_logo.png"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Logo from "@/components/Logo"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    return (
        <header className="shadow-lg bg-white sticky top-0 z-50">
            <div className="max-w-5/6 mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200 pb-3 mt-2">
                <div className="flex justify-between items-center py-2">
                    <Link href={"/"} className="shrink-0">
                        <Logo/>
                    </Link>
                    

                    <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
                        {/* Active Link (Home) - Underline is always full width */}
                        <Link
                            href="/"
                            className="relative py-1 text-[#D66237] transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-full after:bg-[#AF5B36]"
                        >
                            Home
                        </Link>

                        {/* Inactive Link - Underline slides out from the left on hover */}
                        <Link
                            href="/"
                            className="group relative py-1 hover:text-[#D66237] transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-[#AF5B36] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            All Books
                        </Link>

                        {/* Inactive Link */}
                        <Link
                            href="/"
                            className="group relative py-1 hover:text-[#D66237] transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-[#AF5B36] after:transition-all after:duration-300 hover:after:w-full"
                        >
                            My Profile
                        </Link>
                    </nav>


                    <div className="hidden md:flex items-center gap-4">

                        <Link href={"/"} className="bg-[#D66237] text-white px-6 py-2.5 font-semibold rounded-md hover:bg-[#b74718] transition">
                            Login
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 shadow-inner">
                    <nav className="flex flex-col space-y-4 font-medium text-gray-700">
                        <Link href="/" onClick={toggleMenu} className="hover:text-blue-500 transition">Home</Link>
                        <Link href="/all-books" onClick={toggleMenu} className="hover:text-blue-500 transition">All Books</Link>
                        <Link href="/profile" onClick={toggleMenu} className="hover:text-blue-500 transition">My Profile</Link>
                    </nav>

                    <div className="pt-4 border-t border-gray-100">
                        <Link href="/" className="block text-center bg-[#00D3BB]/50 py-3 font-semibold rounded-md">
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar