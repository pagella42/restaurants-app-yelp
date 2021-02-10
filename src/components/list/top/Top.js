import React, { useState } from 'react';
import './top.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { getRestaurants } from '../../../redux/store';
import { connect } from 'react-redux';
import { TABS, TAB_NAMES } from "../../../Consts";
  
function Top({search, searchChange, page, getRestaurants}) {
    const handleOnkeyPress = (event) => {
        if(event.key == "Enter"){
            getRestaurantsRequest(search)
        }
    }
    const getRestaurantsRequest = (search) => {
        if(!search) return
        if(page === TABS.LOCATION){
            getRestaurants(search)
        }
        else if (page === TABS.CATEGORIES){
            getRestaurants(null, search)
        }
    }
    return (
        <div id="list-top">
            <div id="top-inner">

                {search ?
                    <div  className="title-cont">
                        <button onClick={()=>{getRestaurantsRequest(search)}} id="search-butt">Search</button>
                    </div> :
                    <div id="search-butt-cont"> 
                      <span className="header-title">{TAB_NAMES[page]}</span>  
                    </div>
                    }

                <div className="search-cont">
                    <input id="search" onKeyPress={handleOnkeyPress} placeholder={`Search by ${TAB_NAMES[page]}`}  value={search} onChange={searchChange}/>
                    <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    getRestaurants: (location, category) => dispatch(getRestaurants(location, category))
})

export default connect(mapStateToProps, mapDispatchToProps)(Top);
