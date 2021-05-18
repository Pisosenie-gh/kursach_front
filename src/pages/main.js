import Nav from "../components/navbar";
import Footer from "../components/footer";
import {Link} from "react-router-dom";

function Main() {
  return (
    <div >
  <Nav/>

      <div id="page">

        <aside id="colorlib-hero">
          <div className="flexslider">
            <ul className="slides">
              <li style={{backgroundImage: `url("http://photos-models.com/wp-content/uploads/2014/05/1-advertising-digital-art-10.jpg")`, backgroundPosition: 'unset'}}>
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6 offset-sm-3 text-center slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 className="head-1">Женская</h1>
                          <h2 className="head-2">Коллекция</h2>
                          <h2 className="head-3">Обуви</h2>
                          <p><Link to = '/shoes' className="btn btn-primary">Приорбрести обувь</Link></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </aside>

        <div className="colorlib-product">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
                <h2 style={{fontFamily: 'sans-serif'}}>Лидеры продаж</h2>
              </div>
            </div>
            <div className="row row-pb-md">

              <div className="col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img src="http://127.0.0.1:8000/media/media/photo/ea6d33e5e03605925e56d62e4c32f9d3_byPMR7q.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template"/>
                  </a>
                  <div className="desc">
                    <h2><a href="/shoes/2">ADIDAS CAMPUS 80S W</a></h2>
                    <span className="price">48990 тенге</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img src="http://127.0.0.1:8000/media/media/photo/005905139bc9972a95fda08e86bffe0d.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template"/>
                  </a>
                  <div className="desc">
                    <h2><a href="/shoes/6">SKECHERS POP UPS</a></h2>
                    <span className="price">15990 тенге</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img src="http://127.0.0.1:8000/media/media/photo/6.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template"/>
                  </a>
                  <div className="desc">
                    <h2><Link to = '/shoes/10'>BRASKA</Link></h2>
                    <span className="price">16790 тенге</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p><a href="#" className="btn btn-primary btn-lg">Смотреть все продукты</a></p>
              </div>
            </div>
          </div>
        </div>


        </div>
      <Footer/>
    </div>


  );
}

export default Main;
