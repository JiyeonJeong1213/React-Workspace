import './App.css';

import { Pure, Shallow} from './05_PureComponent';
import FunctionComponent from './06_FunctionComponent';
import Fragments from './07_Fragments';

function App3(){

    return(
        //<Pure/>
        //<Shallow/>
        //<FunctionComponent/>

        <table>
            <thead>
                <tr>
                    {/* 여러개의 td태그를 추가할 예정 */}
                    <Fragments/>
                </tr>
            </thead>
        </table>
    )
}

export default App3;