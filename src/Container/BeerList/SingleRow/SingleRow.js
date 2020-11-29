import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid';
import RowCard from './RowCard/RowCard'
import './SingleRow.css'

class GridCard extends Component{

    render(){
        
        return(
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={4} sm={2} className={"grid"}>
                        <RowCard media={true} image={this.props.image.image}></RowCard>
                    </Grid>
                    <Grid item xs={4} sm={5} className={"grid"}>
                        <RowCard 
                            header={false} 
                            first={this.props.data.name} 
                            second={this.props.data.style}/>
                    </Grid>
                    <Grid item xs={4} sm={5} className={"grid"}>
                        <RowCard 
                            header={true}
                            first={this.props.data.abv} 
                            second={this.props.data.ibu}
                            third={this.props.data.ounces}/>
                    </Grid>
                </Grid>
                
                    
            </div>
        )
    }
}
export default GridCard