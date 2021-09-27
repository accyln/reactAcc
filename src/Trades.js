import  React,{Component} from 'react';
import { variables } from './Variables.js';

export class Trades extends Component{
  
  constructor(props){
      super(props);

      this.state={
          trades:[]
      }

  }
  
  refreshList(){
      fetch(variables.API_URL+'acc')
      .then(response=>response.json()).then(
        data=> {
            this.setState({trades:data});
        }).catch(err=> console.log("error: ", err));
  }

  componentDidMount(){
    this.refreshList();
  }
  
    render(){

        const{
            trades
        }=this.state;
      return(
          <div>
              <table className="table table-striped">
                  <thead>
                      <tr>
                          <th>OrderId</th>
                          <th>Symbol</th>
                          <th>Side</th>
                          <th>Price</th>
                      </tr>
                  </thead>
                  <tbody>
                      {trades.map(trade=> 
                        <tr key={trade.OrderId}>
                        <td>{trade.OrderId}</td>
                        <td>{trade.Symbol}</td>
                        <td>{trade.Side}</td>
                        <td>{trade.Price}</td>
                        </tr>
                        )}
                  </tbody>
              </table>


          </div>
      )
  }



}