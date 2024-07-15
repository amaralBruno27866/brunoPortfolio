import { Cape } from './Cape/Cape';
import styels from './About.module.css';

export function About(){
    return(
        <div className={styels.about}>
            <div>
                <h1>About me</h1>
                <Cape/>
            </div>            
        </div>
    )
}