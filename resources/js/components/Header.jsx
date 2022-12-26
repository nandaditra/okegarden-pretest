import logo from "../assets/logo.png"
import fotoProfil from "../assets/foto-profil.jpg"

const Header = () => {
    return (
            <div className="bg-white ">
                    <div className="bg-white flex flex-wrap w-full items-center justify-between mx-auto px-7 py-3  shadow-md">
                        <div>
                          <a href="/" className="flex items-center">
                            <img 
                               className="w-44"
                               src={logo} 
                               alt="logo.png" />
                               </a>
                        </div>
                        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                           <span className="sr-only">Open main menu</span>
                           <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                 
                        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                             <div>
                                <ul className="flex flex-col md:flex-row">
                                        <li>
                                            <a 
                                            className="block px-4 py-2 text-sm text-gray font-bold font-sans hover:text-green"
                                            href="/">
                                            Beranda
                                            </a>
                                        </li>
                                        <li>
                                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownLayanan" className="flex items-center block px-4 py-2 text-sm font-bold text-gray font-sans hover:text-green">
                                            Layanan  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"viewBox="0 0 24 24"> <path fill="none" d="M0 0H24V24H0z"></path><path d="M7 10l5 5 5-5"></path></svg>
                                            </button>
                                            <div id="dropdownLayanan" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                                    <li>
                                                        <a href="/" className="block py-2 px-4 text-sm font-bold text-black font-sans hover:text-green">Dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="/" className="block py-2 px-4 text-sm font-bold text-black font-sans hover:text-green">Settings</a>
                                                    </li>
                                                    <li>
                                                        <a href="/" className="block py-2 px-4 text-sm font-bold text-black font-sans hover:text-green">Earnings</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownBlog" className="flex items-center block px-4 py-2 text-sm font-bold text-gray font-sans hover:text-green">
                                            Blog  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"viewBox="0 0 24 24"> <path fill="none" d="M0 0H24V24H0z"></path><path d="M7 10l5 5 5-5"></path></svg>
                                            </button>
                                            <div id="dropdownBlog" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                                    <li>
                                                        <a href="/" className="block py-2 px-4 text-sm font-bold text-black font-sans hover:text-green">Dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="/" className="block py-2 px-4 text-sm font-bold text-black font-sans hover:text-green">Settings</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownMitra" className="flex items-center block px-4 py-2 text-sm font-bold text-gray font-sans hover:text-green">
                                            Mitra  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"viewBox="0 0 24 24"> <path fill="none" d="M0 0H24V24H0z"></path><path d="M7 10l5 5 5-5"></path></svg>
                                            </button>
                                            <div id="dropdownMitra" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                                    <li>
                                                        <a href="/" className="block py-2 px-4 text-sm font-bold text-black font-sans hover:text-green">Mitra Ijo</a>
                                                    </li>
                                                    <li>
                                                        <a href="/" className="block py-2 px-4 text-sm font-bold text-black font-sans hover:text-green">Mitra Baru</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                    
                             </div>
                        </div>
                        
                        <div className="">
                                <img 
                                        className="rounded-full w-10"
                                        src={fotoProfil} 
                                        alt="fotoProfil.png"
                                        />
                        </div>
                    </div>
            </div>
    )
}

export default Header;