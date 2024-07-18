import styels from './About.module.css';
import { Banner } from './Banner/Banner';

export function About(){
    return(
        <section id="AboutMe" className={styels.about}>
            <div>
                <h1>About me</h1>
            </div> 
            <div className={styels.container}>
                <div className={styels.content}>
                    <Banner/>
                </div> 
            </div>          
        </section>
    )
}