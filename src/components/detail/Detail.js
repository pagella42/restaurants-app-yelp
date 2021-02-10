import React from "react";
import "./detail.css";
import Icon from "../../assets/ForkIcon";
import { connect } from "react-redux";
import { setSelectedItem } from "../../redux/store";

function Detail({ selectedItem, setSelectedItem }) {
  return (
    <div id="detail-container">
      {!selectedItem ? (
        <div id="no-data-cont">
          <Icon />
          <span id="icon-detail">Select a restaurant to display it here!</span>
        </div>
      ) : (
        <div id="data-cont">
            <div id="details-close-row">
                <span id="details-close" onClick={()=>setSelectedItem(null)}>X</span>
            </div>
            <span className="details-data-row name-size-row">{selectedItem.name}</span>
            <span className="details-data-row big-size-row">{selectedItem.is_closed ? "Is closed now" : "Is open now"}</span>
            <br/>
            <span className="details-data-row big-size-row">Category: <span className="small-size-row">{selectedItem.categories[0].alias}</span></span>
            <span className="details-data-row big-size-row">Phone: <span className="small-size-row">+{selectedItem.display_phone}</span></span>
            <span className="details-data-row big-size-row">Address: <span className="small-size-row">{selectedItem.location.address1}, {selectedItem.location.city}</span></span>
            <span className="details-data-row big-size-row">Price range: <span className="small-size-row">{selectedItem.price}</span></span>
            <span className="details-data-row big-size-row">Rating({selectedItem.review_count}): <span className="small-size-row">{selectedItem.rating} stars</span></span>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedItem: state.selectedItem,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedItem: (item) => dispatch(setSelectedItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
