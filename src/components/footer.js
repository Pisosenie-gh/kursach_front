
function Footer() {
  return (
    <div >
        <footer id="colorlib-footer" role="contentinfo">
            <div className="container">
                <div className="row row-pb-md">
                    <div className="col footer-col colorlib-widget">
                        <h4>О магазине</h4>
                        <p>Самый передовой магазин женской обуви.</p>
                        <p>
                            <ul className="colorlib-social-icons">
                                <li><a href="#"><i className="icon-twitter"></i></a></li>
                                <li><a href="#"><i className="icon-facebook"></i></a></li>
                                <li><a href="#"><i className="icon-linkedin"></i></a></li>
                                <li><a href="#"><i className="icon-dribbble"></i></a></li>
                            </ul>
                        </p>
                    </div>
                    <div className="col footer-col colorlib-widget">
                        <h4>Быстрые ссылки</h4>
                        <p>
                            <ul className="colorlib-footer-links">
                                <li><a href="#">Контакты</a></li>
                                <li><a href="#">О нас</a></li>
                                <li><a href="#">Обувь</a></li>

                            </ul>
                        </p>
                    </div>

                    <div className="col footer-col">
                        <h4>Контактная информация</h4>
                        <ul className="colorlib-footer-links">
                            <li>Курсовая работа выполнена  <br/> Зорин Данил Михайлович ТЗИ 18-09Р</li>
                            <li><a href="tel://1234567920">Технологии: DRF, React</a></li>
                            <li><a href="mailto:info@yoursite.com">LINCORE</a></li>
                        </ul>
                    </div>
                </div>
            </div>


        </footer>
    </div>

  );
}

export default Footer;
