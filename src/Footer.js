const Footer = () => {

    return(
        <footer className='bg-purple text-white'>
            <div className='container text-center'>
                <div className='pt-5 pb-5'>
                    <div className='mb-3'>
                        MM
                    </div>
                    <div className='social'>
                        <ul>
                            <li className='list-inline-item p-2'>
                                <a href='to'>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className='list-inline-item p-2'>
                                <a href='https://github.com/modupimaphoto'>
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </li>
                            <li className='list-inline-item p-2'>
                                <a href='to'>
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li className='list-inline-item p-2'>
                                <a href='mailto:modupimaphoto@gmail.com'>
                                    <i className="fa-regular fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;