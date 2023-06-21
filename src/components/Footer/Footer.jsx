import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <p className='contact-info'>E-mail: antoniofeitosadev@gmail.com</p>
                <p className='contact-info'>
                    LinkedIn:{' '}
                    <a
                        href='https://www.linkedin.com/in/ant%C3%B4nio-carlos-alves-964a31239/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Antônio Carlos Alves
                    </a>
                </p>
                <p className='contact-info'>
                    GitHub:{' '}
                    <a href='https://github.com/CacaAlves00' target='_blank' rel='noopener noreferrer'>
                        CacaAlves00
                    </a>
                </p>
                <p className='university'>Universidade Tecnológica Federal do Paraná</p>
                <p className='copy'>&copy; 2023 - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer
