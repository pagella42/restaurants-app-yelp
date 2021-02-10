import React, { useState, useEffect } from 'react';
import './list.css'
import Top from './top/Top';
import Results from './results/Results';

function List({data, page, search, setSearch}) {

   const [list, setList] = useState([])

   let searchChange = (event) => {
      setSearch(event.target.value)
   }

   return (
      <div id="list-container">
         <Top page={page} search={search} setSearch={setSearch} searchChange={searchChange} />
         <Results list={list} />
      </div>

   )
}
export default List;
