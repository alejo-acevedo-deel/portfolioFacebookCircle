import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Social from '../components/Social';
import Educacion from '../components/Educacion';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';




const App = () => {
    return(
        <Main>
            <Sidebar>
                <About>

                </About>
                <Social>

                </Social>
            </Sidebar>
            <Info>
                <Educacion>

                </Educacion>
                <Experience>

                </Experience>
                <Certificates>
                    
                </Certificates>
                <Skills>

                </Skills>
            </Info>
        </Main>
    );
};

export default App;