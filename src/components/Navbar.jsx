



// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header className="header__section header__transparent">
//       <div className="header__topbar bg__primary">
//         <div className="container">
//           <div className="header__topbar--inner d-flex align-items-center justify-content-center">
//             <div className="header__shipping">
//               <p className="header__shipping--text text-white">
//                 UV PRINTING FOIL I DIGITAL FOIL I HOT STAMPING FOIL I COLD
//                 STAMPING FOIL I SILICON RUBBER SHEETS I SILICON RUBBER ROLLER I
//                 EMBOSSING FOIL
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="main__header header__sticky">
//         <div className="container">
//           <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
//             <div className="offcanvas__header--menu__open">
//               <a
//                 className="offcanvas__header--menu__open--btn"
//                 href="javascript:void(0)"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="ionicon offcanvas__header--menu__open--svg"
//                   viewBox="0 0 512 512"
//                 >
//                   <path
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeMiterlimit="10"
//                     strokeWidth="32"
//                     d="M80 160h352M80 256h352M80 352h352"
//                   ></path>
//                 </svg>
//               </a>
//             </div>

//             <div className="main__logo">
//               <h1 className="main__logo--title">
//                 <Link className="main__logo--link" to="/">
//                   <img
//                     className="main__logo--img"
//                     src="https://www.foilkraft.in/images/logo.png"
//                     alt="logo-img"
//                   />
//                 </Link>
//               </h1>
//             </div>

//             <div className="header__menu d-none d-lg-block header__sticky--block">
//               <nav className="header__menu--navigation">
//                 <ul className="d-flex">
//                   <li className="header__menu--items">
//                     <Link className="header__menu--link text-white" to="/">
//                       Home
//                     </Link>
//                   </li>

//                   <li className="header__menu--items">
//                     <Link className="header__menu--link text-white" to="/about">
//                       About Us
//                     </Link>
//                   </li>

//                   <li className="header__menu--items mega__menu--items">
//                     <Link className="header__menu--link text-white" to="/shop">
//                       Product
//                     </Link>

//                     <ul className="header__mega--menu d-flex">
//                       <li className="header__mega--menu__li">
//                         <span className="header__mega--subtitle">
//                           Hot Stamping Foil
//                         </span>
//                         <ul className="header__mega--sub__menu">
//                           <li>
//                             <Link
//                               className="header__mega--sub__menu--title"
//                               to="/product-details"
//                             >
//                               Stamping Foils
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               className="header__mega--sub__menu--title"
//                               to="/product-details"
//                             >
//                               Multi Color Hot Stamping Foil
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               className="header__mega--sub__menu--title"
//                               to="/product-details"
//                             >
//                               Polypropylene Hot Stamping Foil
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               className="header__mega--sub__menu--title"
//                               to="/product-details"
//                             >
//                               Flower Hot Stamping Foil
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               className="header__mega--sub__menu--title"
//                               to="/product-details"
//                             >
//                               Colored Hot Stamping Foil
//                             </Link>
//                           </li>
//                         </ul>
//                       </li>

//                       <li className="header__mega--menu__li">
//                         <span className="header__mega--subtitle">
//                           Cold Stamping Foil
//                         </span>
//                         <ul className="header__mega--sub__menu">
//                           <li>
//                             <Link
//                               className="header__mega--sub__menu--title"
//                               to="/product-details"
//                             >
//                               Cold Stamping Foil
//                             </Link>
//                           </li>
//                         </ul>
//                       </li>

//                       <li className="header__mega--menu__li">
//                         <span className="header__mega--subtitle">
//                           Digital Foil
//                         </span>
//                         <ul className="header__mega--sub__menu">
//                           <li>
//                             <Link
//                               className="header__mega--sub__menu--title"
//                               to="/product-details"
//                             >
//                               Digital Stamping Foil
//                             </Link>
//                           </li>
//                         </ul>
//                       </li>

//                       <li className="header__mega--menu__li">
//                         <span className="header__mega--subtitle">
//                           Garment Foil
//                         </span>
//                         <ul className="header__mega--sub__menu">
//                           <li>
//                             <Link
//                               className="header__mega--sub__menu--title"
//                               to="/product-details"
//                             >
//                               Garment Foil
//                             </Link>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className="header__menu--items">
//                     <Link className="header__menu--link text-white" to="/shop">
//                       Categories
//                     </Link>
//                   </li>

//                   <li className="header__menu--items">
//                     <Link
//                       className="header__menu--link text-white"
//                       to="/be-an-agent"
//                     >
//                       Be An Agent
//                     </Link>
//                   </li>

//                   <li className="header__menu--items">
//                     <Link
//                       className="header__menu--link text-white"
//                       to="/blog"
//                     >
//                       Blog
//                     </Link>
//                   </li>

//                   <li className="header__menu--items">
//                     <Link
//                       className="header__menu--link text-white"
//                       to="/video-gallery"
//                     >
//                       Video Gallery
//                     </Link>
//                   </li>

//                   <li className="header__menu--items">
//                     <Link
//                       className="header__menu--link text-white"
//                       to="/contact"
//                     >
//                       Contact Us
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="header__bottom bg__secondary">
//         <div className="container">
//           <div className="header__bottom--inner position__relative d-flex align-items-center">
//             <div className="header__right--area d-flex justify-content-between">
//               <div className="header__menu">
//                 <nav className="header__menu--navigation">
//                   <ul className="d-flex">
//                     <li className="header__menu--items">
//                       <Link className="header__menu--link text-white" to="/">
//                         Home
//                       </Link>
//                     </li>

//                     <li className="header__menu--items">
//                       <Link
//                         className="header__menu--link text-white"
//                         to="/about"
//                       >
//                         About Us
//                       </Link>
//                     </li>

//                     <li className="header__menu--items">
//                       <Link
//                         className="header__menu--link text-white"
//                         to="/shop"
//                       >
//                         Products
//                       </Link>
//                     </li>

//                     <li className="header__menu--items">
//                       <Link
//                         className="header__menu--link text-white"
//                         to="/be-an-agent"
//                       >
//                         Be An Agent
//                       </Link>
//                     </li>

//                     <li className="header__menu--items">
//                       <Link
//                         className="header__menu--link text-white"
//                         to="/video-gallery"
//                       >
//                         Video Gallery
//                       </Link>
//                     </li>

//                     <li className="header__menu--items">
//                       <Link
//                         className="header__menu--link text-white"
//                         to="/contact"
//                       >
//                         Contact Us
//                       </Link>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>

//               <div className="header__right--info d-flex align-items-center">
//                 <div className="suport__contact d-flex align-items-center">
//                   <svg
//                     className="suport__contact--icon text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="36.725"
//                     height="36.743"
//                     viewBox="0 0 36.725 36.743"
//                   >
//                     <path
//                       d="M28.893,18.469c-.026-2.873.1-5.754-.761-8.565-1.587-5.21-5.306-7.742-10.781-7.272-4.681.4-7.588,2.715-8.785,7.573a24.031,24.031,0,0,0,.2,13.3,11.447,11.447,0,0,0,6.254,7.253c.658.3,1.091.408,1.595-.356a3.732,3.732,0,0,1,4.38-1.334,3.931,3.931,0,1,1-4.582,5.82,2.989,2.989,0,0,0-1.782-1.466c-4.321-1.573-6.842-4.869-8.367-9.032a1.686,1.686,0,0,0-1.238-1.275,7.046,7.046,0,0,1-3.718-2.447A5.739,5.739,0,0,1,3.242,11.83,5.338,5.338,0,0,0,6.318,7.957C7.644,3.033,11.62.193,16.845.02a19.923,19.923,0,0,1,6.324.544c4.479,1.3,6.783,4.52,7.72,8.881a1.966,1.966,0,0,0,1.389,1.723,6.235,6.235,0,0,1,4.439,6.324,5.211,5.211,0,0,1-1.33,3.27,7.98,7.98,0,0,1-5.449,2.774c-.731.077-1.124-.051-1.069-.952.085-1.367.022-2.745.026-4.115Z"
//                       fill="currentColor"
//                     />
//                   </svg>

//                   <p className="suport__contact--text text-white">
//                     <span className="suport__text--24">24/7 Support</span>
//                     <a
//                       className="suport__contact--number"
//                       href="tel:7303511253"
//                     >
//                       +91 7303511253
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from  "../assets/logo.jpg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header__section header__transparent">
      {/* Top Bar */}
      <div className="header__topbar bg__primary">
        <div className="container">
          <div className="header__topbar--inner d-flex align-items-center justify-content-center">
            <div className="header__shipping">
              <p className="header__shipping--text text-white">
                UV PRINTING FOIL I DIGITAL FOIL I HOT STAMPING FOIL I COLD
                STAMPING FOIL I SILICON RUBBER SHEETS I SILICON RUBBER ROLLER I
                EMBOSSING FOIL
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main__header header__sticky">
        <div className="container">
          <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
            {/* Mobile Menu Button */}
            <div className="offcanvas__header--menu__open">
              <button
                className="offcanvas__header--menu__open--btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon offcanvas__header--menu__open--svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M80 160h352M80 256h352M80 352h352"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="main__logo">
              <h1 className="main__logo--title">
                <Link className="main__logo--link" to="/">
                  <img
                    className="main__logo--img"
                    src="https://www.foilkraft.in/images/logo.png"
                    alt="logo-img"
                  />
                </Link>
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="header__menu d-none d-lg-block header__sticky--block">
              <nav className="header__menu--navigation">
                <ul className="d-flex">
                  <li className="header__menu--items">
                    <Link className="header__menu--link text-white" to="/">
                      Home
                    </Link>
                  </li>

                  <li className="header__menu--items">
                    <Link className="header__menu--link text-white" to="/about">
                      About Us
                    </Link>
                  </li>

                  <li className="header__menu--items">
                    <Link className="header__menu--link text-white" to="/shop">
                      Products
                    </Link>
                  </li>

                  <li className="header__menu--items">
                    <Link className="header__menu--link text-white" to="/shop">
                      Categories
                    </Link>
                  </li>

                  <li className="header__menu--items">
                    <Link
                      className="header__menu--link text-white"
                      to="/be-an-agent"
                    >
                      Be An Agent
                    </Link>
                  </li>

                  <li className="header__menu--items">
                    <Link className="header__menu--link text-white" to="/blog">
                      Blog
                    </Link>
                  </li>

                  <li className="header__menu--items">
                    <Link
                      className="header__menu--link text-white"
                      to="/video-gallery"
                    >
                      Video Gallery
                    </Link>
                  </li>

                  <li className="header__menu--items">
                    <Link
                      className="header__menu--link text-white"
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Mobile Menu */}
         {mobileMenuOpen && (
  <div className="mobile__menu ">
    <nav className="mobile__menu--navigation">
      <ul className="mobile__menu--list">
        <li>
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMobileMenu}>
            About Us
          </Link>
        </li>

        <li>
          <Link to="/shop" onClick={closeMobileMenu}>
            Products
          </Link>
        </li>

        <li>
          <Link to="/shop" onClick={closeMobileMenu}>
            Categories
          </Link>
        </li>

        <li>
          <Link to="/be-an-agent" onClick={closeMobileMenu}>
            Be An Agent
          </Link>
        </li>

        <li>
          <Link to="/blog" onClick={closeMobileMenu}>
            Blog
          </Link>
        </li>

        <li>
          <Link to="/video-gallery" onClick={closeMobileMenu}>
            Video Gallery
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)}
        </div>
      </div>

      {/* Bottom Header */}
      <div className="header__bottom bg__secondary">
        <div className="container">
          <div className="header__bottom--inner position__relative d-flex align-items-center">
            <div className="header__right--area d-flex justify-content-between">
              <div className="header__menu">
                <nav className="header__menu--navigation">
                  <ul className="d-flex">
                    <li className="header__menu--items">
                      <Link className="header__menu--link text-white" to="/">
                        Home
                      </Link>
                    </li>

                    <li className="header__menu--items">
                      <Link
                        className="header__menu--link text-white"
                        to="/about"
                      >
                        About Us
                      </Link>
                    </li>

                    <li className="header__menu--items">
                      <Link
                        className="header__menu--link text-white"
                        to="/shop"
                      >
                        Products
                      </Link>
                    </li>

                    <li className="header__menu--items">
                      <Link
                        className="header__menu--link text-white"
                        to="/be-an-agent"
                      >
                        Be An Agent
                      </Link>
                    </li>

                    <li className="header__menu--items">
                      <Link
                        className="header__menu--link text-white"
                        to="/video-gallery"
                      >
                        Video Gallery
                      </Link>
                    </li>

                    <li className="header__menu--items">
                      <Link
                        className="header__menu--link text-white"
                        to="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Support */}
              <div className="header__right--info d-flex align-items-center">
                <div className="suport__contact d-flex align-items-center">
                  <svg
                    className="suport__contact--icon text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36.725"
                    height="36.743"
                    viewBox="0 0 36.725 36.743"
                  >
                    <path
                      d="M28.893,18.469c-.026-2.873.1-5.754-.761-8.565-1.587-5.21-5.306-7.742-10.781-7.272-4.681.4-7.588,2.715-8.785,7.573a24.031,24.031,0,0,0,.2,13.3,11.447,11.447,0,0,0,6.254,7.253c.658.3,1.091.408,1.595-.356a3.732,3.732,0,0,1,4.38-1.334,3.931,3.931,0,1,1-4.582,5.82,2.989,2.989,0,0,0-1.782-1.466c-4.321-1.573-6.842-4.869-8.367-9.032a1.686,1.686,0,0,0-1.238-1.275,7.046,7.046,0,0,1-3.718-2.447A5.739,5.739,0,0,1,3.242,11.83,5.338,5.338,0,0,0,6.318,7.957C7.644,3.033,11.62.193,16.845.02a19.923,19.923,0,0,1,6.324.544c4.479,1.3,6.783,4.52,7.72,8.881a1.966,1.966,0,0,0,1.389,1.723,6.235,6.235,0,0,1,4.439,6.324,5.211,5.211,0,0,1-1.33,3.27,7.98,7.98,0,0,1-5.449,2.774c-.731.077-1.124-.051-1.069-.952.085-1.367.022-2.745.026-4.115Z"
                      fill="currentColor"
                    />
                  </svg>

                  <p className="suport__contact--text text-white">
                    <span className="suport__text--24">24/7 Support</span>
                    <a
                      className="suport__contact--number"
                      href="tel:7303511253"
                    >
                      +91 7303511253
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}