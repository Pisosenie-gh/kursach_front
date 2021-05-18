import Nav from "../components/navbar";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

function Shoes({match}) {

      const [event, setData] = useState([]);

  useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/blog/`
        }).then(response => {
            setData(response.data)
        })
  });

  return (
    <div >
  <Nav/>

      <div id="page">

          <div className="breadcrumbs">
              <div className="container">
                  <div className="row">
                      <div className="col">
                          <p className="bread"><span><Link to = '/'>Главная</Link></span> / <span>Обувь</span></p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="breadcrumbs-two">
              <div className="container">
                  <div className="row">
                      <div className="col">
                          <div className="breadcrumbs-img"  style={{marginBottom: '-20%'}}>
                              <h2>Обувь</h2>
                          </div>

                      </div>
                  </div>
              </div>
          </div>



          <div className="colorlib-product">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3 col-xl-3">
                          <div className="row">
                              <div className="col-sm-12">

                              </div>
                              <div className="col-sm-12">

                              </div>
                              <div className="col-sm-12">
                                  <div className="side border mb-1">
                                      <h3>Вид обуви</h3>
                                      <ul>
                                          <li><a href="#">Туфли</a></li>
                                          <li><a href="#">Кеды</a></li>
                                          <li><a href="#">Кроссовки</a></li>
                                          <li><a href="#">Сапоги</a></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-sm-12">
                                  <div className="side border mb-1">
                                      <h3>Цвета</h3>
                                      <ul>
                                          <li><a href="#">Черный</a></li>
                                          <li><a href="#">Белый</a></li>
                                          <li><a href="#">Синий</a></li>
                                          <li><a href="#">Красный</a></li>
                                          <li><a href="#">Зеленый</a></li>
                                          <li><a href="#">Серый</a></li>
                                          <li><a href="#">Ораньжевый</a></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-sm-12">
                                  <div className="side border mb-1">
                                      <h3>Материал</h3>
                                      <ul>
                                          <li><a href="#">Ткань</a></li>
                                          <li><a href="#">Кожа</a></li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="col-sm-12">
                                  <div className="side border mb-1">
                                      <h3>Вид обуви</h3>
                                      <ul>
                                          <li><a href="#">Беговая</a></li>
                                          <li><a href="#">Повседневная</a></li>
                                          <li><a href="#">Вечерняя</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-9 col-xl-9">
                          <div className="row row-pb-md">


{event.map(c => (
    <div className="col-lg-4 mb-4 text-center">
                                  <div className="product-entry border">
                                      <Link  to = {{pathname: `shoes/${c.id}`  }} className="prod-img">
                                          <img src={c.image} className="img-fluid"
                                               />
                                      </Link>
                                      <div className="desc">
                                          <h2><Link  to = {{pathname: `shoes/${c.id}`  }}>{c.name}</Link></h2>
                                          <span className="price">{c.price} тенге</span>
                                      </div>
                                  </div>
                              </div>

))}

                          </div>

                      </div>
                  </div>
              </div>
          </div>
            </div>
  <Footer/>

    </div>



  );
}

export default Shoes;
