import React, { Component } from 'react'
import ReactPaginate from "react-paginate";
import {getdidDetails} from "../../services/getApi"


class Pagination extends Component {

  handlePageClick = async (data) => {
   this.props.func(data.selected)
   };

  render() {
    return (
      <div>
        <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={this.props.totalPage }
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={this.handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />

      </div>
    )
  }
}

export default Pagination