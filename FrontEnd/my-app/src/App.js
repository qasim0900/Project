import React,{Component} from "react"
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Plan from "./Plan"
import axios from "axios"
class App extends Component{
  state = {
    items:[],
    text:"",
  }
  handleChange = (e) => {
    this.setState({text:e.target.value})
  }
  handleAdd = (e) =>{
    let d = {items: this.state.text}
    if(d !== ""){
      axios.post("http://127.0.0.1:8000/api/createplan/", d)
      .then ((res) => {
        this.setState({text:""})
        this.componentDidMount()
      })
    } 
  }
  handledelete = (id) =>{
      axios.delete(`http://127.0.0.1:8000/api/destroyplan/${id}`)
      .then(() =>{
      this.componentDidMount()
  })}
  componentDidMount(){
    axios.get("http://127.0.0.1:8000/api/listplan")
    .then((res)=>{
      this.setState({items:res.data})
    })
  }
  render(){
    return(
<div className="container my-5 fw-bold f">
    <div className="row justify-content-start">
      <div className="col-6 mx-auto p-4 shadow-lg">
          <h1 className="text-center f"> Today's Plan</h1>
        <div className="row">
          <div className="col-9 form-field__control">
            <input type="text" className="form-field__input fw-bold" value={this.state.text} onChange={this.handleChange}/>
            <label className="form-field__label">Today Plan</label>
          </div>
          <div className="col d-grid gap-2 d-md-block my-4">
            <button type="text" className="btn-btn-outline-success px-5 button-1 fw-bold" onClick={this.handleAdd}>Add</button>
          </div>
          <div className="container">
            <ul className="list-unstyled fw-bold row">
              {
              
              this.state.items.map((value,i) => {
              return <Plan key={i} id={value.id} value={value.items} data={this.handledelete}/>
              })
              }
            </ul>
          </div>
        </div>
      </div>
      </div>
      </div>
)
  }
}
export default App 