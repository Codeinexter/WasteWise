import Link from 'next/link';
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Header = () => {
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    let closeTimeout;

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [status]);

    return (
        <div className="relative bg-darkGreen h-20 w-full border-b-2 flex items-center justify-between px-4 sm:px-6 lg:px-8 text-white text-lg z-50">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <Image
                    src="/logo2.jpg"
                    width={50}
                    height={50}
                    alt="logo"
                    className="h-12 w-12 object-cover sm:h-14 sm:w-14"
                    priority
                />
                
                <p className="text-offWhite font-bold hidden sm:block">WasteWise</p>
            </div>

            {/* Hamburger Menu */}
            <button
                className="sm:hidden block text-white focus:outline-none z-50"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    {menuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Navigation Links */}
            <ul
                className={`sm:flex sm:space-x-4 sm:items-center sm:justify-center ${
                    menuOpen ? 'block' : 'hidden'
                } absolute sm:static top-20 left-0 w-full bg-darkGreen sm:bg-transparent px-4 sm:px-0 text-center z-50 shadow-none mt-0`}
            >

                <li className="p-2">
                    <Link href="/">Home</Link>
                </li>
                <li className="p-2">
                    <Link href="/Community">Community</Link>
                </li>
                <li className="p-2">
                    <Link href="/About">About</Link>
                </li>
                <li className="p-2">
                    <Link href="/profile">Profile</Link>
                </li>
            </ul>

            {/* User Profile Section */}
            {!loading && (
                session ? (
                    <div
                        className="relative z-50"
                        onMouseEnter={() => {
                            clearTimeout(closeTimeout);
                            setDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                            closeTimeout = setTimeout(() => setDropdownOpen(false), 300);
                        }}
                    >
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center space-x-2"
                        >
                            <Image
                                src={session.user.image}
                                alt="User Profile"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        </button>

                        {dropdownOpen && (
                            <div
                                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-black z-50"
                                onMouseEnter={() => clearTimeout(closeTimeout)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <button
                                    onClick={() => signOut()}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                                >
                                    SignOut
                                </button>
                                
                                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-200">
                                    Go to Profile
                                </Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={() => signIn()}
                        className="bg-lightGreen hover:border hover:border-white text-darkGreen px-4 py-2 rounded transition-all z-50"
                    >
                        SignIn
                    </button>
                )
            )}
        </div>
    );
};

export default Header;
