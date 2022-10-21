import React, {Component} from 'react';
import axios from 'axios';

export default class FeedbackDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            emp:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/emp/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    emp:res.data.post
                });

                    console.log(this.state.post);
            }
        });
    }
    render(){

            const{date,name,jobPosition,feedback}= this.state.emp

        return(
<div>
<table width="100%">
<thead >

</thead>

</table>

        
           
<div className="container">
            <div style={{margin:'20px'}}>
                <h4>{date}</h4>

                <hr/>

                <dl className="row">
                    <dt className="col-sm-3">name</dt>
                    <dd className="col-sm-9">{name}</dd>

                    <dt className="col-sm-3">jobPosition</dt>
                    <dd className="col-sm-9">{jobPosition}</dd>

                    <dt className="col-sm-3">feedback</dt>
                    <dd className="col-sm-9">{feedback}</dd>


                </dl>
                
            </div>
</div>
            </div>
        )
    }
}

//all ok