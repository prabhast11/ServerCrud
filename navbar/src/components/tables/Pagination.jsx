import React, { Component } from 'react'
import ReactPaginate from "react-paginate";
import {getdidDetails} from "../../services/getApi"



// const handlePageClick = async (data) => {
//     console.log('clicked on a page',data.selected)

   
//   };
// handlePageClick = async (data) => {
//   const pno=3;
//   console.log('clicked on a page11111111111',data.selected)

//   const fetchData=async()=>{
//   const response=await getServerDetails(pno);
  
//   this.setState({result:response.data})
//   console.log("fetch data of server details :",this.state.result)
//  }
//   fetchData()


// };



class Pagination extends Component {

  handlePageClick = async (data) => {
  //   const pno=3;
  //   console.log('clicked on a page11111111111',data.selected)
  
  //   const fetchData=async()=>{

  //     const response=await getdidDetails(data.selected);
    
  //         this.setState({result:response.data})
  //         console.log("fetch data of server details :",this.state.result)

     
  //  }
  //   fetchData()

  // console.log('At home clicking the page', data.selected)
  this.props.func(data.selected)
  
  
  };
// class Pagination extends Component {

//   handlePageClick = async (data) => {
//     const pno=3;
//     console.log('clicked on a page11111111111',data.selected)
  
//     const fetchData=async()=>{
//     const response=await getServerDetails(data.selected);
    
//     this.setState({result:response.data})
//     console.log("fetch data of server details :",this.state.result)
//    }
//     fetchData()
  
  
//   };



  render() {
    return (
      <div>
        <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={this.props.totalPage }
        // pageCount={15}
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