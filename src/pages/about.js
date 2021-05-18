import Nav from "../components/navbar";
import Footer from "../components/footer";
import {Link} from "react-router-dom";

function About() {
  return (
    <div >
  <Nav/>

      <div id="page">

        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread"><span><Link to = '/'>Главная</Link></span> / <span>О нас</span></p>
              </div>
            </div>
          </div>
        </div>


        <div className="colorlib-about">
          <div className="container">
            <div className="row row-pb-lg">
              <div className="col-sm-6 mb-3">
                <div className="video colorlib-video" style={{backgroundImage: `url("https://aspolo.ua/ua/image/cache/catalog/obuv9/zhenskie-krossovki-fila-disruptor-ii-rozovye-e13433-6-800x533.jpg")`}}>

                  <div className="overlay"></div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-wrap">
                  <h2>Лучший магазин женской обуви</h2>
                  <p style={{fontSize: 22, color: 'black'}}>Women shop - это лучший магазин женской обуви в Казахстане.</p>
                  <p style={{fontSize: 22, color: 'black'}}> На нашем счету более 100000 довольных покупателей.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
    </div>


  );
}

export default About;
