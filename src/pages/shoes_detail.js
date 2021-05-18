import Nav from "../components/navbar";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {Modal, Button} from 'react-bootstrap'
import Zayavka from "../components/modal";
function Shoes_detail({match}) {
      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [post, setPost] = useState({})
    const id = match.params.id

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/blog/${id}/`
    }).then(response => {
      setPost(response.data)
    })
  }, [id]);
    const shoes_name = post.name
    const size = post.size
    {
        return (
            <div>

<Nav/>
                <div id="page">

                    <div className="breadcrumbs">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="bread"><span><Link to = '/'>Главная</Link></span> / <span>Обувь</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="colorlib-product">
                        <div className="container">
                            <div className="row row-pb-lg product-detail-wrap">
                                <div className="col-sm-8">
                                    <div className="owl-carousel">
                                        <div className="item">
                                            <div className="product-entry border">
                                                <a href="#" className="prod-img">
                                                    <img src={post.image} className="img-fluid"
                                                         />
                                                </a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-desc">
                                        <h3>{post.name}</h3>
                                        <p className="price">
                                            <span> {post.price} тенге</span>
                                            <span className="rate">
									<i className="icon-star-full"></i>
									<i className="icon-star-full"></i>
									<i className="icon-star-full"></i>
									<i className="icon-star-full"></i>
									<i className="icon-star-half"></i>
									(74 Rating)
								</span>
                                        </p>
                                        <p style={{color: 'black', fontSize: 15}}> {post.description}</p>
                                        <div className="size-wrap">
                                            <div className="block-26 mb-2">
                                                <h4>Размер</h4>
                                                <ul>
                                                    <li><a href="#">{post.size}</a></li>

                                                </ul>
                                            </div>

                                        </div>

                                        <div className="input-group mb-4">
                     	<span className="input-group-btn">
                        	<button type="button" className="quantity-left-minus btn" data-type="minus" data-field="">
                           <i className="icon-minus2"></i>
                        	</button>
                    		</span>
                                            <input type="text" id="quantity" name="quantity"
                                                   className="form-control input-number"
                                                   value="1" min="1" max="100"/>
                                            <span className="input-group-btn ml-1">
                        	<button type="button" className="quantity-right-plus btn" data-type="plus" data-field="">
                             <i className="icon-plus2"></i>
                         </button>
                     	</span>
                                        </div>


                                        <div className="row">

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-md-12 pills">
                                            <div className="bd-example bd-example-tabs">
                                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="pills-description-tab"
                                                           data-toggle="pill"  href="#pills-description" role="tab"
                                                           aria-controls="pills-description"
                                                           aria-expanded="true">Описание</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="pills-manufacturer-tab"
                                                           data-toggle="pills-manufacturer" href="#pills-manufacturer" role="tab"
                                                           aria-controls="pills-description"
                                                            onClick={handleShow} aria-expanded="true">Оформление заявки</a>
                                                    </li>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Оформление заявки</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Zayavka size = {size}  shoes_name = {shoes_name} /> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>

        </Modal.Footer>
      </Modal>
                                                </ul>

                                                <div className="tab-content" id="pills-tabContent">
                                                    <div className="tab-pane border fade show active"
                                                         id="pills-description"
                                                         role="tabpanel" aria-labelledby="pills-description-tab">
                                                        <p>{post.description}</p>

                                                    </div>

                                                    <div className="tab-pane border fade" id="pills-manufacturer"
                                                         role="tabpanel"
                                                         aria-labelledby="pills-manufacturer-tab">
                                                        <p>Even the all-powerful Pointing has no control about the blind
                                                            texts it
                                                            is an almost unorthographic life One day however a small
                                                            line of blind
                                                            text by the name of Lorem Ipsum decided to leave for the far
                                                            World of
                                                            Grammar.</p>
                                                        <p>When she reached the first hills of the Italic Mountains, she
                                                            had a
                                                            last view back on the skyline of her hometown
                                                            Bookmarksgrove, the
                                                            headline of Alphabet Village and the subline of her own
                                                            road, the Line
                                                            Lane. Pityful a rethoric question ran over her cheek, then
                                                            she
                                                            continued her way.</p>
                                                    </div>

                                                    <div className="tab-pane border fade" id="pills-review"
                                                         role="tabpanel"
                                                         aria-labelledby="pills-review-tab">
                                                        <div className="row">
                                                            <div className="col-md-8">
                                                                <h3 className="head">23 Reviews</h3>
                                                                <div className="review">
                                                                    <div className="user-img"
                                                                    ></div>
                                                                    <div className="desc">
                                                                        <h4>
                                                                            <span
                                                                                className="text-left">Jacob Webb</span>
                                                                            <span
                                                                                className="text-right">14 March 2018</span>
                                                                        </h4>
                                                                        <p className="star">
										   				<span>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-half"></i>
										   					<i className="icon-star-empty"></i>
									   					</span>
                                                                            <span className="text-right"><a href="#"
                                                                                                            className="reply"><i
                                                                                className="icon-reply"></i></a></span>
                                                                        </p>
                                                                        <p>When she reached the first hills of the
                                                                            Italic
                                                                            Mountains, she had a last view back on the
                                                                            skyline of
                                                                            her hometown Bookmarksgrov</p>
                                                                    </div>
                                                                </div>
                                                                <div className="review">
                                                                    <div className="user-img"
                                                                    ></div>
                                                                    <div className="desc">
                                                                        <h4>
                                                                            <span
                                                                                className="text-left">Jacob Webb</span>
                                                                            <span
                                                                                className="text-right">14 March 2018</span>
                                                                        </h4>
                                                                        <p className="star">
										   				<span>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-half"></i>
										   					<i className="icon-star-empty"></i>
									   					</span>
                                                                            <span className="text-right"><a href="#"
                                                                                                            className="reply"><i
                                                                                className="icon-reply"></i></a></span>
                                                                        </p>
                                                                        <p>When she reached the first hills of the
                                                                            Italic
                                                                            Mountains, she had a last view back on the
                                                                            skyline of
                                                                            her hometown Bookmarksgrov</p>
                                                                    </div>
                                                                </div>
                                                                <div className="review">
                                                                    <div className="user-img"
                                                                    ></div>
                                                                    <div className="desc">
                                                                        <h4>
                                                                            <span
                                                                                className="text-left">Jacob Webb</span>
                                                                            <span
                                                                                className="text-right">14 March 2018</span>
                                                                        </h4>
                                                                        <p className="star">
										   				<span>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-half"></i>
										   					<i className="icon-star-empty"></i>
									   					</span>
                                                                            <span className="text-right"><a href="#"
                                                                                                            className="reply"><i
                                                                                className="icon-reply"></i></a></span>
                                                                        </p>
                                                                        <p>When she reached the first hills of the
                                                                            Italic
                                                                            Mountains, she had a last view back on the
                                                                            skyline of
                                                                            her hometown Bookmarksgrov</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="rating-wrap">
                                                                    <h3 className="head">Give a Review</h3>
                                                                    <div className="wrap">
                                                                        <p className="star">
										   				<span>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					(98%)
									   					</span>
                                                                            <span>20 Reviews</span>
                                                                        </p>
                                                                        <p className="star">
										   				<span>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-empty"></i>
										   					(85%)
									   					</span>
                                                                            <span>10 Reviews</span>
                                                                        </p>
                                                                        <p className="star">
										   				<span>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-empty"></i>
										   					<i className="icon-star-empty"></i>
										   					(70%)
									   					</span>
                                                                            <span>5 Reviews</span>
                                                                        </p>
                                                                        <p className="star">
										   				<span>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-empty"></i>
										   					<i className="icon-star-empty"></i>
										   					<i className="icon-star-empty"></i>
										   					(10%)
									   					</span>
                                                                            <span>0 Reviews</span>
                                                                        </p>
                                                                        <p className="star">
										   				<span>
										   					<i className="icon-star-full"></i>
										   					<i className="icon-star-empty"></i>
										   					<i className="icon-star-empty"></i>
										   					<i className="icon-star-empty"></i>
										   					<i className="icon-star-empty"></i>
										   					(0%)
									   					</span>
                                                                            <span>0 Reviews</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
}
export default Shoes_detail;
