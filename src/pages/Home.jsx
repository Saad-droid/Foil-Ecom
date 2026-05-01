import React from 'react';

export default function Home() {
  return (
    <main className="main__content_wrapper">
      {/* Start slider section */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.foilkraft.in/images/slider1-home1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.foilkraft.in/images/slider2-home1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.foilkraft.in/images/slider3-home1.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      {/* End slider section */}

      {/* Start categories product section */}
      <section className="product__section section--padding pt-10">
        <div className="container">
          <div className="section__heading text-center mb-25">
            <h2 className="section__heading--maintitle">Our Product Categories</h2>
          </div>
          <div className="tab_content">
            <div id="product_all" className="tab_pane active show">
              <div className="product__section--inner">
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n28">
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/catimg/c1.webp" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Hot Stamping Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/catimg/c2.webp" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Garment Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/catimg/c3.webp" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Wood Grain Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/catimg/c4.webp" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Rexine Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/catimg/c5.webp" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Digital Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/catimg/c6.webp" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Cold Stamping Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/catimg/c7.webp" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">MGI Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.html">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/catimg/c8.webp" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">TAG Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End categories product section */}

      {/* Start product section */}
      <section className="product__section section--padding pt-0 footer__bg">
        <div className="container">
          <div className="section__heading text-center mb-25" style={{ paddingTop: '25px' }}>
            <h2 className="section__heading--maintitle">Hot Stamping Foil</h2>
          </div>
          <div className="tab_content">
            <div id="product_all" className="tab_pane active show">
              <div className="product__section--inner">
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n28">
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.php?mid=1">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/medicine/p1.jpg" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Stamping Foils</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.php?mid=2">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/medicine/p2.jpg" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Multi Color Hot Stamping Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.php?mid=3">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/medicine/p3.jpg" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Polypropylene Hot Stamping Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.php?mid=4">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/medicine/p4.jpg" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Flower Hot Stamping Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.php?mid=5">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/medicine/p5.jpg" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Colored Hot Stamping Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col md-28">
                    <div className="product__items">
                      <div className="product__items--thumbnail">
                        <a className="product__items--link" href="product-details.php?mid=6">
                          <img className="product__items--img product__primary--img" src="https://www.foilkraft.in/medicine/p6.jpg" alt="product-img" />
                        </a>
                        <div className="product__badge">
                          <span className="product__badge--items sale">Hot Stamping Foil</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End product section */}

      {/* Start banner section */}
      <section className="banner__section section--padding pt-10">
        <div className="container">
          <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n30">
            <div className="col mb-30">
              <div className="banner__items position__relative">
                <a className="banner__items--thumbnail display-block" href="shop.html">
                  <img className="banner__items--thumbnail__img display-block" src="https://www.foilkraft.in/assets/img/banner/banner1.png" alt="banner-img" />
                  <div className="banner__items--content">
                    <h2 className="banner__items--content__title text__secondary">Digital Foil</h2>
                    <p className="banner__items--content__desc text-white">Shop our selection of organic fresh vegetables in a discounted price 10% off.</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col mb-30">
              <div className="banner__items position__relative">
                <a className="banner__items--thumbnail display-block" href="shop.html">
                  <img className="banner__items--thumbnail__img display-block" src="https://www.foilkraft.in/assets/img/banner/banner2.png" alt="banner-img" />
                  <div className="banner__items--content">
                    <h2 className="banner__items--content__title text__secondary">Tag Foil</h2>
                    <p className="banner__items--content__desc text-black">Shop our selection of organic fresh vegetables in a discounted price 10% off.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End banner section */}

      {/* Start blog section */}
      <section className="product__section section--padding">
        <div className="container">
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-2">
            <div className="col custom-col">
              <div className="product__grid--wrapper">
                <div className="product__grid--heading">
                  <h2 className="product__grid--heading__title">Garment Foil</h2>
                </div>
                <div className="product__grid--inner">
                  <div className="product__grid--items d-flex align-items-center">
                    <div className="product__grid--items--thumbnail">
                      <a className="product__items--link" href="product-details.php?mid=7">
                        <img className="product__grid--items__img product__primary--img" src="https://www.foilkraft.in/medicine/g1.webp" alt="product-img" />
                      </a>
                    </div>
                    <div className="product__grid--items--content">
                      <h3 className="product__grid--items--content__title h4">
                        <a href="product-details.php?mid=7">Garment Foil</a>
                      </h3>
                    </div>
                  </div>
                  <div className="product__grid--items d-flex align-items-center">
                    <div className="product__grid--items--thumbnail">
                      <a className="product__items--link" href="product-details.php?mid=8">
                        <img className="product__grid--items__img product__primary--img" src="https://www.foilkraft.in/medicine/g2.webp" alt="product-img" />
                      </a>
                    </div>
                    <div className="product__grid--items--content">
                      <h3 className="product__grid--items--content__title h4">
                        <a href="product-details.php?mid=8">Textile Foil</a>
                      </h3>
                    </div>
                  </div>
                  <div className="product__grid--items d-flex align-items-center">
                    <div className="product__grid--items--thumbnail">
                      <a className="product__items--link" href="product-details.php?mid=9">
                        <img className="product__grid--items__img product__primary--img" src="https://www.foilkraft.in/medicine/g3.webp" alt="product-img" />
                      </a>
                    </div>
                    <div className="product__grid--items--content">
                      <h3 className="product__grid--items--content__title h4">
                        <a href="product-details.php?mid=9">Printed Textile Foil</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col custom-col">
              <div className="product__grid--wrapper">
                <div className="product__grid--heading">
                  <h2 className="product__grid--heading__title">Wood Grain Foil</h2>
                </div>
                <div className="product__grid--inner">
                  <div className="product__grid--items d-flex align-items-center">
                    <div className="product__grid--items--thumbnail">
                      <a className="product__items--link" href="product-details.php?mid=20">
                        <img className="product__grid--items__img product__primary--img" src="https://www.foilkraft.in/medicine/w1.webp" alt="product-img" />
                      </a>
                    </div>
                    <div className="product__grid--items--content">
                      <h3 className="product__grid--items--content__title h4">
                        <a href="product-details.php?mid=20">Wood Grain Foil</a>
                      </h3>
                    </div>
                  </div>
                  <div className="product__grid--items d-flex align-items-center">
                    <div className="product__grid--items--thumbnail">
                      <a className="product__items--link" href="product-details.php?mid=21">
                        <img className="product__grid--items__img product__primary--img" src="https://www.foilkraft.in/medicine/w2.webp" alt="product-img" />
                      </a>
                    </div>
                    <div className="product__grid--items--content">
                      <h3 className="product__grid--items--content__title h4">
                        <a href="product-details.php?mid=21">Woodgrain Foil Designs</a>
                      </h3>
                    </div>
                  </div>
                  <div className="product__grid--items d-flex align-items-center">
                    <div className="product__grid--items--thumbnail">
                      <a className="product__items--link" href="product-details.php?mid=22">
                        <img className="product__grid--items__img product__primary--img" src="https://www.foilkraft.in/medicine/w3.webp" alt="product-img" />
                      </a>
                    </div>
                    <div className="product__grid--items--content">
                      <h3 className="product__grid--items--content__title h4">
                        <a href="product-details.php?mid=22">Wood Texture Hot Stamping Foil</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col custom-col d-lg-none d-xl-block">
              <div className="product__grid--wrapper">
                <div className="product__grid--heading">
                  <h2 className="product__grid--heading__title">Rexine Foil</h2>
                </div>
                <div className="product__grid--inner">
                  <div className="product__grid--items d-flex align-items-center">
                    <div className="product__grid--items--thumbnail">
                      <a className="product__items--link" href="product-details.php?mid=17">
                        <img className="product__grid--items__img product__primary--img" src="https://www.foilkraft.in/medicine/r1.webp" alt="product-img" />
                      </a>
                    </div>
                    <div className="product__grid--items--content">
                      <h3 className="product__grid--items--content__title h4">
                        <a href="product-details.php?mid=17">Rexine Foil</a>
                      </h3>
                    </div>
                  </div>
                  <div className="product__grid--items d-flex align-items-center">
                    <div className="product__grid--items--thumbnail">
                      <a className="product__items--link" href="product-details.php?mid=18">
                        <img className="product__grid--items__img product__primary--img" src="https://www.foilkraft.in/medicine/r2.webp" alt="product-img" />
                      </a>
                    </div>
                    <div className="product__grid--items--content">
                      <h3 className="product__grid--items--content__title h4">
                        <a href="product-details.php?mid=18">PU Rexine Foil</a>
                      </h3>
                    </div>
                  </div>
                  <div className="product__grid--items d-flex align-items-center">
                    <div className="product__grid--items--thumbnail">
                      <a className="product__items--link" href="product-details.php?mid=19">
                        <img className="product__grid--items__img product__primary--img" src="https://www.foilkraft.in/medicine/r3.webp" alt="product-img" />
                      </a>
                    </div>
                    <div className="product__grid--items--content">
                      <h3 className="product__grid--items--content__title h4">
                        <a href="product-details.php?mid=19">Plain Golden Foil Rexine - For Footwear | Cloth</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col custom-col d-lg-none d-xl-block">
              <div className="product__grid--wrapper">
                <div className="product__grid--heading">
                  <h2 className="product__grid--heading__title">Digital Foil</h2>
                </div>
                <div className="product__grid--inner">
                  <div className="product__grid--items d-flex align-items-center">
                    <div className="product__grid--items--thumbnail">
                      <a className="product__items--link" href="product-details.php?mid=14">
                        <img className="product__grid--items__img product__primary--img" src="https://www.foilkraft.in/medicine/d1.webp" alt="product-img" />
                      </a>
                    </div>
                    <div className="product__grid--items--content">
                      <h3 className="product__grid--items--content__title h4">
                        <a href="product-details.php?mid=14">Digital Stamping Foil</a>
                      </h3>
                    </div>
                  </div>
                  <div className="product__grid--items d-flex align-items-center">
                    <div className="product__grid--items--thumbnail">
                      <a className="product__items--link" href="product-details.php?mid=15">
                        <img className="product__grid--items__img product__primary--img" src="https://www.foilkraft.in/medicine/d2.webp" alt="product-img" />
                      </a>
                    </div>
                    <div className="product__grid--items--content">
                      <h3 className="product__grid--items--content__title h4">
                        <a href="product-details.php?mid=15">Digital Foil - Packaging, Magazines, Boxes, Books</a>
                      </h3>
                    </div>
                  </div>
                  <div className="product__grid--items d-flex align-items-center">
                    <div className="product__grid--items--thumbnail">
                      <a className="product__items--link" href="product-details.php?mid=16">
                        <img className="product__grid--items__img product__primary--img" src="https://www.foilkraft.in/medicine/d3.webp" alt="product-img" />
                      </a>
                    </div>
                    <div className="product__grid--items--content">
                      <h3 className="product__grid--items--content__title h4">
                        <a href="product-details.php?mid=16">Digital Foil - Certificates, Crafting</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End blog section */}
    </main>
  );
}
