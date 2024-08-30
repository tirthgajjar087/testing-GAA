import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddData from './AddData';
import { ReadData } from './ReadData';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Testing React
    //     </a>
    //     <button>Click me</button>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddData />} />
        <Route path="/readData" element={<ReadData />}></Route>

        {/* <Route path="/edit_data/:id" element={<EditData />} />
        <Route path='/show_data/:emp_id' element={<ShowData />} />
        <Route path='/yuplib' element={<YupLib />} />
        <Route path='/formiklib' element={<FormikLib />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
