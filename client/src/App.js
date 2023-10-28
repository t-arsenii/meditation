import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';
import Hello from './pages/Hello/hello';
import Registration from './pages/Registration/registration';
import Logging from './pages/Logging/logging';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import StartTest from './pages/StartTest/starttest';
import EndTest from './pages/EndTest/endtest';
import Question1 from './pages/Question1/question1'
import Question2 from './pages/Question2/question2'
import Question3 from './pages/Question3/question3'
import Main from './pages/Main/main'
import Navbar from './components/Navbar/navbar'
import Books from './pages/Books/books'
import MoodCalendar from './pages/Mood/mood'
import Music from './pages/Music/music'
import Chat from './pages/Chat/chat'
import Profil from './pages/Profil/profil'
import MusicUnfastened from './pages/MusicUnfastened/musicunfastened'
import Animation from './pages/Animation/animation'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>   
        <Route path="/" element={<Homepage />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/logging" element={<Logging />} />
        <Route path="/starttest" element={<StartTest />} />
        <Route path="/endtest" element={<EndTest />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/main" element={<Main />} />
        <Route path='/books' element={<Books />}/>
        <Route path='/mood' element={<MoodCalendar />}/>
        <Route path='/music' element={<Music />}/> 
        <Route path='/chat' element={<Chat />}/> 
        <Route path='/profil' element={<Profil />}/> 
        <Route path='/musicunfastened' element={<MusicUnfastened />}/> 
        <Route path='/animation' element={<Animation />}/> 

      </Routes>
    </Router>
  );
}

export default App;
