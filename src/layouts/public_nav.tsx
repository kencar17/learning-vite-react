import { Link } from "react-router-dom";
import viteLogo from '/vite.svg'


export function PublicNavbar() {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                        <a href="/">
                            <img className="h-8 w-auto" src={viteLogo} alt="Logo"/>
                        </a>
                        </div>
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <Link
                                to="#"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Home
                            </Link>
                            <Link
                                to="#"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                About
                            </Link>
                            <Link
                                to="#"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Services
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Link
                            to="/login"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
