import '../styles/Navbar.css'


function Navbar() {
  return (
        <nav>
        <div className="wrapper">
            <div className="logo"><a href='https://github.com/eigen3dev/react-test-case' target='_blank'>PT. Eigen Tri Mathema</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Algoritma 1</a></li>
                    <li><a href="#courses">Algoritma 2</a></li>
                    <li><a href="#tutors">Algoritma 3</a></li>
                    <li><a href="#partners">Algoritma 4</a></li>
                    <li><a href="#contact">Algoritma 5</a></li>
                    {/* <li><a href="https://pt-eigen-react2.vercel.app/" target='_blank' className="tbl-biru">Link</a></li> */}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
