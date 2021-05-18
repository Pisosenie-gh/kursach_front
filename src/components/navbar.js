import {Link} from "react-router-dom";

function Nav() {
  return (
    <div >
      <nav className="colorlib-nav" role="navigation">
        <div className="top-menu">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-md-9">
                <div id="colorlib-logo"><Link to = '/'>Women shop</Link></div>
              </div>
              <div className="col-sm-5 col-md-3">
                <form action="#" className="search-wrap">
                  <div className="form-group">
                    <input type="search" className="form-control search" placeholder="Search"/>
                      <button className="btn btn-primary submit-search text-center" type="submit"><i
                          className="icon-search"></i></button>

                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-left menu-1">
                <ul>
                  <li className="active"><Link to = '/' style={{fontFamily: 'sans-serif'}}>Главная</Link></li>
                  <li className="has-dropdown">

                  <li><Link to = '/about' style={{fontFamily: 'sans-serif'}}>О нас</Link></li>
                    <li><Link to = '/shoes' style={{fontFamily: 'sans-serif'}}>Обувь</Link></li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sale">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center">
                <div className="row">
                  <div className="owl-carousel2">
                    <div className="item">
                      <div className="col">
                        <h3><a href="#">25% скидки на все товары </a></h3>
                      </div>
                    </div>
                    <div className="item">
                      <div className="col">
                        <h3><a href="#">50% на всю летнюю обувь</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Nav;
