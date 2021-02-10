import React from 'react';
import './side-bar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { getRestaurants } from '../../redux/store';
import { connect } from 'react-redux';
import { TABS } from "../../Consts";

function SideBar({page, getRestaurants, setPage, setSearch}) {
    const handleOnClick = (destination) => {
        getRestaurants([])
        setPage(destination)
        setSearch("")
    }

    return (

        <div id="side-bar">
            {page === TABS.LOCATION ?
                <div id="side-inner">
                    <div className="icon-cont icon-clicked" onClick={() => handleOnClick(TABS.LOCATION)}>
                        <FontAwesomeIcon class="icon" icon={faUtensils} />
                    </div>
                    <div className="icon-cont icon-cont-down" onClick={() => handleOnClick(TABS.CATEGORIES)}>
                        <FontAwesomeIcon class="icon" icon={faList} />
                    </div>
                </div>
                :
                <div id="side-inner">
                    <div className="icon-cont icon-cont-up" onClick={() => handleOnClick(TABS.LOCATION)}>
                        <FontAwesomeIcon class="icon" icon={faUtensils} />
                    </div>
                    <div className="icon-cont icon-clicked" onClick={() => handleOnClick(TABS.CATEGORIES)}>
                        <FontAwesomeIcon class="icon" icon={faList} />
                    </div>
                </div>
            }



        </div>


    )
}



const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    getRestaurants: (content) => dispatch(getRestaurants(content))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);


