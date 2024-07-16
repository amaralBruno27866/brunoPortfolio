import { Cape } from './Cape/Cape';
import styels from './About.module.css';

export function About(){
    return(
        <section id="AboutMe" className={styels.about}>
            <div>
                <h1>About me</h1>
            </div> 
            <div className={styels.container}>
                <Cape/>
                <div className={styels.content}>
                    <h2>Mission</h2>
                    <h2>Vison</h2>
                    <h2>Values</h2>
            </div> 
            </div>          
        </section>
    )
}