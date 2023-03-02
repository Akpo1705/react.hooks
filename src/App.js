import { useRef } from 'react';
import './App.css';

import InputTest from './components/input/inputTest';
import HoverTest from './components/hover/HoverTest';
import ListTest from './components/list/ListTest';
import Debtest from './components/search/DebTest';
import ReqTest from './components/request/ReqTest';


function App() {
        return (
                <>
                                {/* <ReqTest/> */}
                                <Debtest/>
                                <InputTest/>
                                <HoverTest/>
                                <ListTest/>


                </>
        );
}

export default App;
