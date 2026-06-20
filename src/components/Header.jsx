import Cookies from 'js-cookie';

const Header = () => {
    const logout = () => {
        Cookies.remove("jwt_token");
        window.location.href = "/login";
    }

    return (
        <header className="header flex items-center justify-between">
            <div className="left">
                <a className="text-[var(--accent)] text-600 text-[2rem] text-decoration-none" href="/" aria-label="Go to dashboard home">Go Business</a>
            </div>
            <div className="flex flex-row items-center gap-[1rem] text-[0.9rem]">
                <p className="try-for-free bg-[var(--accent)] text-[var(--light)] rounded-[7px]">Try for free</p>
                <button type='button' className='logout-btn' onClick={logout}>Log out</button>
            </div>
        </header>
    )
}

export default Header;