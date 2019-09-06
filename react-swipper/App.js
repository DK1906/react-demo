import React from 'react';
// import logo from './logo.svg';
import './App.css';
import img1 from './imgs/psb6.jpg'
import img2 from './imgs/psb7.jpg'
import img3 from './imgs/psb8.jpg'


const imgs = [img1,img2,img3]
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      index:1
    }
  }

  
  _goNext=()=>{
    console.log(this.state.index)
    console.log(999)

    var {index} = this.state;
    if(index===imgs.length-1){
      index=0
     
    }else{
      index++;

    }
    console.log(index)
    this.setState({
      index:index
    })
  }
  _goPrev=()=>{
    console.log(999)
    var {index} = this.state;
    if(index===0){
      index=imgs.length-1;
    }else{
      index--;
    }
    console.log(index)
    this.setState({
      index:index
    })
   
  }

  render(){
    return(
      <div  className="box">
       <ul className="parent">
         {imgs.map((item,i)=>(
           <li  className={`item  ${this.state.index===i?'active':''}` }  key={i}><img src={item} alt=""/></li>
         ))}
        
       </ul>
       <button className="right btn"  onClick={()=>this._goNext()}> {'>'} </button>
        <button className="left btn" onClick={()=>this._goPrev()} > {'<'} </button>
      </div>
    )
  }
}

export default App;
