import React, {Component} from 'react'
import axios from 'axios';

const initialState ={
    
    
    name:"",
    
    
    feedback:"",
   
    nameError:"",
    feedbackError:"",
   
}

export default class CreateFeedback extends Component{

    constructor(props){
        super(props);
        this.state = initialState;
        
    }

        handleInputChange =(e) =>{
                const isCheckbox = e.target.type ==="checkbox";
                this.setState({
                        [e.target.name]: isCheckbox
                        ? e.target.checked
                        : e.target.value
                });
    };

    validate = () =>{

       
        let nameError="";
        let feedbackError="";

        
        if(!this.state.name){
            nameError ='*name cannot be blank';
        }
        
        if(!this.state.feedback){
            feedbackError ='*feedback cannot be blank';
        }
        

        if (nameError || feedbackError){
            this.setState({nameError,feedbackError});
            return false;
        }

        return true;
    };

        onSubmit = (e) =>{
            e.preventDefault();

                const isValid = this.validate();

            const {name,feedback} = this.state;

            const data ={
                
                name:name,
                
               
                feedback:feedback

            }
            
            if (isValid){
            console.log(data)
       
            axios.post("/emp/save", data).then((res) =>{
                if(res.data.success){
                    alert("Create Successfull")
                    this.setState(
                        { 
                        
                        name:"",
                        
                        feedback:""
                        
                    
                }
            
                )
                }
            })
        
                        //clear form 
this.setState(initialState);
        }

        };
        



        

    render(){//
        
        return(//
<div>
<table width="100%">
<thead >

</thead>

</table>





            <div className="col-md-8 mt-4 mx-auto">
                
                <form className="Header" >
                    <div>
                    <h1 className="formstyle">Enter Feedback</h1>
                        <br></br>
                    </div>

                    
               
                    

            <div style={{color:"red"}}>{this.state.nameError}
            </div> 

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b>Preferred Name </b></label>
                        <input type="text"
                        className="emptxt"
                        name="name"
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}/>
            </div>

           

            

            <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}><b> Feedback </b></label>
                        <textarea type="text"
                        className="emptxtarea"
                        name="feedback"
                        placeholder="Enter your suggestions/ Ideas/ Allegations/ requirements."
                        value={this.state.feedback}
                        onChange={this.handleInputChange}/>
            </div>

            
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; Save
            </button>

            </form>
            </div>
            </div>
        );
    }
}

