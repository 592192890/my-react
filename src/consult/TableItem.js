import React,{Component} from 'react';


class TableItem extends Component{
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <tr>
                <td>{this.props.value.name}</td>
                <td>{this.props.value.password}</td>
                <td>{this.props.value.age}</td>
                <td>{this.props.value.sex}</td>

            </tr>
        )
    }
}

export default TableItem;