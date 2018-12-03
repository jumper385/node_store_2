import React, {Component} from 'react'
import uuid from 'uuid'

class ProductPage extends Component{

    state = {
        items: [
            {id:uuid(), name:'Blake Thornton', cost:33.98 },
            {id:uuid(), name:'Dean Mullins', cost:35.27 },
            {id:uuid(), name:'Ivan Knight', cost:11.67 },
            {id:uuid(), name:'Elsie Campbell', cost:16.40 },
            {id:uuid(), name:'Esther Klein', cost:26.67 },
            {id:uuid(), name:'Elnora Norton', cost:39.71 }
        ]
    }

    render() {
        return(
            <div>
                <div>
                    {this.state.items.map((item) => {
                        return (
                            <div>
                                <h1>{item.name}</h1>
                                <p>{item.id}</p>
                                <h2>${item.cost}</h2>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ProductPage