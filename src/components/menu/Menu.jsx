import "./menu.scss"

export default function Menu({ menuOpen,setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#landing">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#footer">Contact</a>
                </li>
            </ul>
        </div>
    )
}
