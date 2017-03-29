import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

class HelloGrid extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let items = [{
                title: "XYZ"
            },
            {
                title: "XYZ"
            },
            {
                title: "XYZ"
            },
            {
                title: "XYZ"
            }];
        let itemsPerRow = 2;
        let totalRows = Math.ceil(items.length/itemsPerRow);
        let colSpan = 12 / itemsPerRow;
        let rows = [];
        let cells = null;
        for(let i = 0; i <items.length; i++){
            if(i % itemsPerRow == 0){
                cells = [];
                rows.push(cells);
            }
            cells.push(items[i]);
        }
        console.log("Rows: {}", rows);
        return (
            <div>
                <h2>Working on it</h2>
                <Grid>
                    {
                    rows.map(r => (
                        <Row>
                            {
                            r.map(c => (
                                <Col md={colSpan}>
                                    <h3>{c.title}</h3>
                                </Col>
                            ))
                            }
                        </Row>
                    ))
                    }
                </Grid>
            </div>
        );     
    }
}

export default HelloGrid;