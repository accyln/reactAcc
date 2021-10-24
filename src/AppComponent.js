import React from 'react';
import { Badge,Nav,NavDropdown,Form,FormControl,Button,Row,Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import Select from 'react-select';
import { ListGroupItemHeading } from 'reactstrap';


class AppComponent extends React.Component {

    constructor() {
      super();

      this.displayData = [];

      this.state = {
        showdata : this.displayData,
        postVal : "",
        buttonstatus:false,
        buttonwhenclick:true,
        trades: [],
        options : [
          {
            label: "startTest",
            value: "startTest",
          },
          {
            label: "login",
            value: "login",
          },
          {
            label: "islemSec",
            value: "islemSec",
          },
          {
            label: "musteriAra",
            value: "musteriAra",
          }
        ]
      }

      this.appendData = this.appendData.bind(this);
      this.prependData = this.prependData.bind(this);
      this.handleChange = this.handleChange.bind(this);

    };

  appendData() {
    if(this.state.postVal!=""){
         this.displayData.push(<div  id="component" style={{maxWidth: '%100',display: 'flex',  justifyContent:'center', alignItems:'center'}}><Row><div><span class="badge badge-success">{this.state.postVal}</span></div></Row></div>);
         this.setState({
            showdata : this.displayData,
            postVal : ""
         });
    }
      }

  prependData() {
   this.displayData.unshift(<div id="display-data" style={{maxWidth: '%100',display: 'flex',  justifyContent:'center', alignItems:'center'}}><pre><div><Form.Label>startTest()</Form.Label></div></pre></div>);
   this.setState({
      showdata : this.displayData,
      postVal : ""
   });
 }


 handleChange(e) {
      let getTextAreaValue = e.target.value;
      this.setState({
        postVal :getTextAreaValue
      });
}


changeKeyword = (keyword) => {

  this.setState({postVal:keyword.value});
  console.log(this.state.postVal +' '+keyword.value)

}

  render() {
    return (
          <div id="mainContainer" style={{margin: 50}}>
            <div>
<Row><Col sm={2}>
             {/* <div style={{maxWidth:'%100',display: 'flex',  justifyContent:'center', alignItems:'center'}}>
             <input  type="submit" className="button" onClick={this.appendData}  value="Append"/>
             <input  type="submit" className="button" onClick={this.prependData}   value="Prepend"/>
             <Button variant='info' className="button" onClick={this.appendData}>Ekle</Button>
             </div> */}
             <div style={{maxWidth:'%100',  justifyContent:'center', alignItems:'center'}}>
             <div class="panel panel-primary" id="result_panel">
    <div class="panel-heading"><Row><div style={{marginLeft:50}}><h3 class="panel-title">Keywords</h3></div><div style={{marginLeft:100,alignItems:'right'}}><Button variant='info' className="button" onClick={this.appendData}>Ekle</Button></div>
    </Row></div>
   <ListGroup>
     {this.state.options.map(keyword => (<ListGroupItem active={keyword.value===this.state.postVal? true : false} onClick={() => this.changeKeyword(keyword)} key={keyword.value}>{keyword.value}</ListGroupItem>))}
   </ListGroup>
</div>  
             </div>
             </Col>
               <Col sm={10}>
               <div id="display-data-Container" style={{border: '1px ridge' ,maxWidth:'%100',height:'800px'}}>
             {this.displayData}
             </div>
             <Form.Label>{this.state.postVal}</Form.Label>
               </Col>
               </Row>
             </div>
             
          </div>
      );
  }
}


export default AppComponent;