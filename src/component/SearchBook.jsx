import React from 'react'

const SearchBook = () => {
  return (
    <div>
        <h1><center>SEARCH BOOK</center></h1>
        <br />
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