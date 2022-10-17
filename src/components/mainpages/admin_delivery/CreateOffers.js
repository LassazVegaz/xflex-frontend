import React, {Component} from 'react';
import axios from 'axios';
import './CreateOffers.css';





const initialState ={
    
    offerID:"",
    offerName:"",
    description:"",
    phone:"",
    email:"",
    offerIDerror:"",
    offerNameerror:"",
    descriptionerror:"",
    phoneerror:"",
    emailerror:""
        


}

export default class CreateOffers extends Component {

    constructor(props) {
        super(props);
        this.state=initialState;
    }

    handleInputChange = (e) =>{ 
        const isCheckbox = e.target.type==="checkbox";

        this.setState({
            [e.target.name]:isCheckbox
            ?e.target.Checked
            :e.target.value
       
   });
   };





    validate=()=>{
       

        let offerIDerror="";
        let offerNameerror="";
      
        let  descriptionerror="";
        let phoneerror="";
        let  emailerror="";
      



        if(!this.state.offerID){
            offerIDerror ='*offer ID cannot be Null';
            alert("Not inserted successfully");
        }
        if(!this.state.offerName){
            offerNameerror='*Offer name cannot be Null';
        }
     

        
        if(!this.state.description){
            descriptionerror ='*Description  cannot be Null';
        }

        if(!this.state.phone){
            phoneerror ='*Phone number cannot be Null';
        }
        if(!this.state.email){
            emailerror ='*Email cannot be Null';
        }
        

       

        if ( offerIDerror ||  offerNameerror ||   descriptionerror||  phoneerror ||   emailerror  ){
            this.setState({ offerIDerror , offerNameerror ,   descriptionerror,  phoneerror ,   emailerror });
            return false;
        }

        return true;
    };


    onSubmit=(e) =>{

        e.preventDefault();
        const isValid =this.validate();
        const {offerID,offerName,description,phone,email} = this.state;

        const data = {
            offerID:offerID,
            offerName:offerName,
            description:description,
            phone:phone,
            email:email
        
        }


        if(isValid){
        console.log(data)

        axios.post("api/offer/save",data).then((res) =>{
            if(res.data.success){
                alert("New Offer Details Inserted Successfully!!")
                this.setState(
                    {
                        offerID:"",
                        offerName:"",
                        description:"",
                        phone:"",
                        email:"",
    
                    }
                    
                )
            }
            
        })
    }
};

    render(){
        return (
	 
            <div className="container">
            <div className="crte" style={{width:"85%"}}>

            <br/><h3 style={{textAlign:"center"}}><b> Place Your Delivery Order</b></h3><hr/>
           <br/>

           <div id="demo" className="carousel slide" data-ride="carousel">

            <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
            </ul>
  
            <div className="carousel-inner" style={{height:"100%",width:"100%"}}>
            <div className="carousel-item active">
            <img src="/static/images/s111.png" width="100%" height="300px"/>
            </div>
            <div className="carousel-item">
            <img src="/static/images/s111.png" width="100%" height="300px"/>
            </div>
         
            <div className="carousel-item">
            <img src="/static/images/s111.png" width="100%" height="300px"/>
            </div>
            </div>
  
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
            </a>
            </div>

           
                
                <br/><form className="ofy" >
                <div style={{color:'red',textAlign:'left'}}>{this.state.offerIDerror}</div>
                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Offer ID Number</label>
                        <input type="text"
                        className="form-control"
                        name="offerID"
                        placeholder="Enter Offer ID Number"
                        value={this.state.offerID}
                        onChange={this.handleInputChange} required/>
                    </div>
                    <div style={{color:'red',textAlign:'left'}}>{this.state.offerNameerror}</div>
                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>How you name the new offer ?</label>
                        <input type="text"
                        className="form-control"
                        name="offerName"
                        placeholder="Enter Offer Name"
                        value={this.state.offerName}
                        onChange={this.handleInputChange} required/>
                    </div>

                    <div style={{color:'red',textAlign:'left'}}>{this.state.phoneerror}</div>
                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Phone Number</label>
                        <input type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Enter Phone Number"
                        value={this.state.phone}
                        onChange={this.handleInputChange} required/>
                    </div>



                    <div style={{color:'red',textAlign:'left'}}>{this.state.emailerror}</div>
                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Email</label>
                        <input type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.handleInputChange} required/>
                    </div>



              <div style={{color:'red',textAlign:'left'}}>{this.state.descriptionerror}</div>
                    <div className="form-group" style={{marginBottom:"15px"}}>
                        <label style={{marginBottom:"5px"}}>Description</label>
                        <input type="text"
                        className="form-control"
                        name="description"
                        placeholder="Enter the description"
                        value={this.state.description}
                        onChange={this.handleInputChange} required/>
                    </div>



                    <br/><center><button className="btn btn-success" type="submit" style={{marginBottom:"15px"}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save Offer
                    </button>
                    <center><button type="button" class="btn btn-warning"  ><a href = "/UpdateOffers"  style={{textDecoration:'none', color:'white'}}>Click here</a></button></center>
                     </center>   
                </form>
                
            </div>
            </div>
	   
        )

        }
    }
    