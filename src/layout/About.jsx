import {Link} from "react-router-dom"

function About() {
    return <div className="about">
        <div className="about__title"></div>
            <nav className="about__description">
                <li><Link to="/">О приложении</Link></li>
                <li><Link to="/TwoLetters">Слоги</Link></li>
                <li><Link to="/RandomItem">Слова</Link></li>


            </nav>
    </div>
}

export { About }