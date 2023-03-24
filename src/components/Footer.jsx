import React from 'react'

function Footer() {
    return (
        <footer className="#00bcd4 cyan">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
                </div>
            </div>
        </footer>
    )
}

export {Footer};