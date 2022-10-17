import React, {Component} from 'react';
import axios from 'axios'; 




export default class DeliveryReport extends Component{
constructor(props){
  super(props);

 
  this.state={
    payments:[] 
  };
}


componentDidMount(){
  this.retrivePayments(); 
}






retrivePayments(){ 
  axios.get("/api/posts").then(res=>{ 
    if(res.data.success){
      this.setState({
        payments:res.data.existingPosts
      });

      console.log(this.state.payments);
    }
  });
}




  






   render(){ 
    return(
      <div >
      <div className ="container">
      <div className="row">
        


<div  >
        <div  className="textcenter" style={{marginTop:'40px' }}>
           <h4>Delivery Receipt</h4>
       </div>
       <hr/>


       
       
                  <div class="card2" id="content"   >
  
  <div class="container" >
 

 

        <div className="col-lg-3 mt-2 mb-2">
       
             </div>
             
      </div>
        <table  className="table table-hover" style={{marginTop:'40px'}} > 
          <thead>
            <tr>
            <th scope="col">#</th>
              <th scope="col">Delivery Fee</th>
              <th scope="col">Address</th>
              <th scope="col">Delivery Instruction</th>
              <th scope="col">Additional Note</th>
             
              
              
             
            </tr>
          </thead>

          <tbody>
              {this.state.payments.map((payments,index)=>( //used salaries array variable
                <tr key={index}>
                  <th scope="row">{index+1}</th>  
                  
                  <td  style={{color:"darkblue",fontWeight:'bold'}}>{payments.DeliveryFee}</td>
                  <td style={{color:"blue",fontWeight:'bold'}}>{payments.Address}</td>
                  <td  style={{color:"darkblue",fontWeight:'bold'}}>{payments.Instruction}</td>
                  <td  style={{color:"blue",fontWeight:'bold'}}>{payments.Note}</td>
                 
                  

                </tr>
               ) )}





          </tbody>
        </table>
        </div>
        </div>
        </div>
       


        </div>
      </div>
       

       
     
    )
  }
}


