import React from "react";
import "./results.css";
import { connect } from 'react-redux';
import Truncate from 'react-truncate';
import { setSelectedItem } from '../../../redux/store';

function Results({restaurants, setSelectedItem}) {
  return (
    <div id="list-results">
      {restaurants && restaurants.map((l) => (
        <div onClick={()=>setSelectedItem(l)} key={l} className="list-item">
          <div className="result-inner">
            <Truncate className="result-name" lines={1} ellipsis={"..."}>{l.name}</Truncate>
            <Truncate className="result-category" lines={1} ellipsis={"..."}>{l.categories[0].title}</Truncate>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
})

const mapDispatchToProps = dispatch => ({
  setSelectedItem: (item) => dispatch(setSelectedItem(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Results);



