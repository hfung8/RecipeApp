
import React from "react";
import FoodComponent from "./foodComponent.js";
 export default class FoodDisplay extends React.Component {
    constructor(){
        super();
    }
  
    render(){
		return(
			<div className="col-md-4" id="side">
				<div className="row" id="sideTitle">
					<h6>What Foods You Have</h6>
					<hr/>
					<p>Foods (#)</p>
				</div>
				<div className="row" id="foodDisplay">
					<FoodComponent/>
				</div>
				<input id="foodInput" type="text" placeholder="Food Input"/>
				<button id="submitBtn">Submit</button>
			</div>
		)	
    }
}


