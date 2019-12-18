import React from 'react';
import Axios from 'axios';

class Description extends React.Component {
    constructor(props){
        super(props);

            this.state = {
                data: [],
                query: '17264ec6'
            }
        }
        
        componentDidMount(){
           window.addEventListener('query',(e) => {
               this.setState({query: e.detail})
               this.getDescription(this.state.query)
           })
            this.getDescription(this.state.query);
        }


        getDescription(query){
            Axios.get(`http://localhost:3004/Description/${query}`)
            .then(({data}) => {
                console.log(data)
                this.setState({data: data})
            })
            .catch(error => console.log(error))
        };


        render() {
            return (
                <div className="desc-wrap-collapsible">
                    <input id="collapsible" className="desc-toggle" type="checkbox"/>
                    <label htmlFor="collapsible" className="desc-lbl-toggle">Description</label>   
                    <div className="desc-collapsible-content"> 
                        {this.state.data.map((el, index) => {
                            return(
                                <div className="desc-content-inner" key={index}> 
                                    <p>
                                        {el.info} 
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
        )
    };    
};
    
export default Description;