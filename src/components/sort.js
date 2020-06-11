import React from "react";

const Sort = (props) => {
  return (
    <div>
      <select name="sort" value={props.search} onChange={props.handleSort}>
        <option value="">Sort By</option>
        <option value="cat">Category</option>
        <option value="desc">Description</option>
      </select>
    </div>
  );
};

export default Sort;
