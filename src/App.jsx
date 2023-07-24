import Banner from './components/banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Certificates from './components/Certificates/Certificates';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
function App() {
  return (
<div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <Banner />
        <Projects />
        <Resume/>
        <Certificates/>
        <Contact/>
    </div>
  );
}

export default App;
