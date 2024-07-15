import {Chart} from './Chart/Chart';
import { Cape } from './Cape/Cape';
import styels from './About.module.css';

export function About(){
    return(
        <div className={styels.about}>
            <div>
                <h1>About me</h1>
                <Cape/>
            </div>            
            <div>
                <h1>Skills</h1>
                <Chart/>
            </div>
        </div>
    )
}