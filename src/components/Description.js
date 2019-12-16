import React from 'react';
import Axios from 'axios';

class Description extends React.Component {
    constructor(props){
        super(props);

            this.state = {
                data: [],
                query: 'http://localhost:3004/Description/beb95fc0-1acf-11ea-b9fe-332f5417770f'
            }
        }
        
        componentDidMount(){
            console.log(this.state.query)
            this.getDescription()
        }


        getDescription(){
            Axios.get(this.state.query)
            .then(({data}) => {
                console.log(data)
                this.setState({data: data})
            })
            .catch(error => console.log(error))
        };

        


        render() {
            return (
        <div>
            {/* <div>
            <div> 
                {this.state.data.map((productDescription, index) => {
                    return(
                        <div key={index}> 
                        <p key={index}>
                        </p>
                        {productDescription.info} </div>
                    )
                })}
            </div>
            </div> */}
        </div>
        )
    };
    
};
    
export default Description;