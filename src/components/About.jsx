import React from 'react';
import Navbar from './Layout/Navbar'


const About = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <section>
                <h1>Data Peserta Sanbercode Bootcamp Reactjs</h1>
                    <ol>
                        <li><strong>Nama:</strong> Helmi Siswo Effendi</li> 
                        <li><strong>Email:</strong> helmiefendi64@gmail.com</li> 
                        <li><strong>Sistem Operasi yang digunakan:</strong> Windows 10</li>
                        <li><strong>Akun Github:</strong> helmai1</li> 
                        <li><strong>Akun Telegram:</strong> @helmieffendi </li> 
                    </ol>
            </section>
        </React.Fragment>
    )
}

export default About;
