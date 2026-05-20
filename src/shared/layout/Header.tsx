const Header = () => {
    return (
        <>
            <header className="bg-cf-dark-red fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <a href="/">
                        <img src="https://codingfactory.aueb.gr/sites/all/themes/cf_theme/logo.png"
                             alt="CF Logo" className="my-4 h-16"/>
                    </a>
                    <nav className="flex gap-4 text-white font-medium">
                        <a href="/">To-Do App</a>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;