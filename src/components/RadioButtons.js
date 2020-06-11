import React from "react";

const RadioButtons = (props) => {
    return(
<div className="container">
  <div className="row">
    <div className="col-sm-12">

      <form>
        <div className="radio">
          <label>
            <input type="radio" value="Category" checked={props.radioValue === "Category"} onChange={(event) => props.handleRadioButtons(event.target.value)}/>
            Category
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="Description" checked={props.radioValue === "Description"} onChange={(event) => props.handleRadioButtons(event.target.value)}/>
            Description
          </label>
        </div>
      </form>

    </div>
  </div>
</div>)
}

export default RadioButtons;
