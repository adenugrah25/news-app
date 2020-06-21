// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Route } from 'react-router-dom'
// import { ReactComponent } from '*.svg';
// import './App.css';

// import components
import NavbarReactstrap from './components/navbar'

//import pages
import Home from './pages/home'
import RequestAPI from './pages/reqAPI'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NavbarReactstrap/>
        <Route path='/' component={Home} exact/>
        <Route path='/generate-news' component={RequestAPI}/>
    </div>
  );
  }
}

export default App;
