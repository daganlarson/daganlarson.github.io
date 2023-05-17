import './Footer.css';
import Link from '../components/Link';

export default function Footer() {
    return (
        <footer className='App-footer'>
            <p>Dagan Larson 2023</p>
            <nav className='Footer-links'>
            <Link name={"Github"} link={"https://github.com/daganlarson"}/> 
            <Link name={"LinkedIn"} link={"https://www.linkedin.com/in/daganlarson/"}/>
            <Link name={"Gitlab"} link={"https://gitlab.com/daganlarson"}/>
            <Link name={"Email"} link={"mailto:daganlarson@duck.com"}/>
            <Link name={"Twitter"} link={"https://twitter.com/daganlarson"}/>
            <Link name={"Instagram"} link={"https://www.instagram.com/daganlarson/"}/>
            </nav>
        </footer>
    );
}