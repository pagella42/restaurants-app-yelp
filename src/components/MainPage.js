import React, { useState, useEffect } from 'react';
import './main_page.css'
import SideBar from './side-Bar/SideBar';
import List from './list/List';
import Detail from './detail/Detail';
import { getRestaurants } from '../redux/store';
import { connect } from 'react-redux';
import { TABS } from "../Consts";
  

function MainPage(props) {
    const [page, setPage] = useState(TABS.LOCATION)
    const [search, setSearch] = useState("")

    return (
        <div id="main-page-container">
            <SideBar setSearch={setSearch} setPage={setPage} page={page} />
            <List setSearch={setSearch} search={search} page={page} data={props.data}/>
            <Detail />
        </div>
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    getRestaurants: () => dispatch(getRestaurants())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);


