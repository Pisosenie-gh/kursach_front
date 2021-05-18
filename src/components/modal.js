import React from 'react'
import axios from "axios";
import {Button} from "react-bootstrap";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

class Zayavka extends React.Component{

    constructor(props) {
    super(props);
    this.state = {
        name: '',
        shoes_name: props.shoes_name,
        size: props.size,
        pay_method: '',
        dostavka: '',
        number: '',
        adress: '',


    };

    this.handleChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    async getData(){

}
handleSubmit(event)  {

     axios({
            method: "POST",
            url: `http://127.0.0.1:8000/api/zayavka/`,
            data: {
              name: this.state.name,
              shoes_name: this.state.shoes_name,
              size: this.state.size,
                pay_method: this.state.pay_method,
                dostavka: this.state.dostavka,
                number: this.state.number,
                adress: this.state.adress,
            },
         headers: {
            "X-CSRFToken": "csrftoken"



         },

        }).then(res => {
                 this.state.data = res.data
                console.log(this.state.data)




    }).catch(function (error) {
        console.log(error);

    });
    event.preventDefault();


}


    render(){
        return(
            <div>
               <form >
                   <label>ФИО</label>
                   <input name = 'name' type="text" className="form-control"
                           onChange = {this.onChange} value = {this.state.name} placeholder="Введите ФИО"/>
                   <label>Номер телефона</label>
                       <input  name = 'number' onChange = {this.onChange} value = {this.state.number} type="text" className="form-control"
                              placeholder="Введите номер"/>






                                       <label>Адрес доставки</label>

                                           <input  name  = 'adress' onChange = {this.onChange} value = {this.state.adress} type="text" className="form-control" id="exampleFormControlInput1"
                                                  placeholder="Адрес"/>

                   <Button onClick = {this.handleSubmit}>Оставить заявку</Button>


               </form>

</div>


)
    }
}

export default Zayavka;
