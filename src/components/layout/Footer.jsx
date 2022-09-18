import React from 'react'

const Footer = () => {
    const Year = new Date().getFullYear()
    return (
        <footer className='footer p-5 bg-gray-700 text-primary-content footer-center'>
            <div>
                <h3>Copyright &copy; {Year}</h3>
            </div>
        </footer>
    )
}

export default Footer