import React,{Component} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, TablePagination, TextField } from '@material-ui/core';
import SingleRow from './SingleRow/SingleRow'
class BeerList extends Component{
    state={
        search:"",
        rowsPerPage:5,
        page:0,
    };
    filterData=(data)=>{
        if(this.state.search.trim()==="") return data;
        // this.setState({page:0})
        return data.filter(d=>(d.name.toLowerCase()).includes((this.state.search.toLowerCase())));;
    }
    handleSearch=(event)=>{
        this.setState({search:event.target.value})
    }
    handleChangeRowsPerPage=(event)=>{
        this.setState({rowsPerPage:parseInt(event.target.value, 10),page:0})
    }
    handleChangePage=(event,page)=>{
        this.setState({page:page})
    }
    resetSearch=(event)=>{
        this.setState({search:''})
    }
    render(){
        
        return(
            <div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <TextField value={this.state.search} color='secondary' label="Search" type="search" variant="filled" onChange={this.handleSearch}/>
                <Button variant="contained" color="primary" onClick={this.resetSearch} style={{height:'30px',margin:'auto'}}>Reset</Button>
                
                <TablePagination
                    style={{color:'white'}}
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={this.filterData(this.props.data).length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
                </div>
                <Table>
                    <TableHead>
                        
                    </TableHead>
                    <TableBody>
                        {this.filterData(this.props.data).
                        slice(this.state.page*this.state.rowsPerPage,this.state.page*this.state.rowsPerPage+this.state.rowsPerPage).
                        map((data,i)=>(
                            <TableRow key={i}>
                                <TableCell>
                                    <SingleRow data={data} image={this.props.imageData[i%5]}></SingleRow>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
            </div>
        )
    }
}
export default BeerList;