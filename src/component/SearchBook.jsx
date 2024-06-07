import React from 'react'
import NavBar from './NavBar'

const SearchBook = () => {
  return (
    <div>
        <h1><center>SERACH BOOK</center></h1>
        <NavBar/>
        
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">BOOK TITLE</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBook