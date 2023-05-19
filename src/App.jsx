import Bulb from './components/Bulb/Bulb';
import Counter from './components/Counter';
import Lists from './components/Lists';
import PrevCurr from './components/PrevCurr';
import WritingLetters from './components/WritingLetters';
import './style.css'
const App = () => {
    return (
        <div className='container'>
            <WritingLetters />
            <Counter />
            <PrevCurr />
            <Lists />
            <Bulb />
        </div>
    );
};
export default App;
