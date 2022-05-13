import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Banner from './components/Banner'
import Articles from './pages/Articles'
/*import Navbar from './components/Navbar'*/
import './App.css';

function App() {
  return (

  <>
  <Router>
  {/*<Navbar/>*/}
  <Banner/>


  <Routes>
      <Route exact path="/viewpost" element={<Articles/>}/>
      <Route exact path="/newpost" element={<CreatePost/>}/>
      <Route exact path="/"/>
      <Route exact path="*" />
  </Routes>

  </Router>
  </>

  );
}

export default App;
