import React , {useState , useEffect }  from 'react';
import { Box , makeStyles  ,Typography, Button, Grid } from '@material-ui/core'
import { useStateValue } from '../ContextAPI/globalState';
import numeral from 'numeral'
import {Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import {  useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => {
    return {
        containerAvatar:{

            
        },
        btnUnSubscribe:{
            
        },
        input:{

            padding:'20px'
        }
    }
})


  

function AddVideo() {
    const history = useHistory()
    const classes = useStyles();
    const { subscribes , untSubscribes } = useStateValue();
    const gotoList = () => {

        history.push(`/`);
    }
       
        
    return (
        <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4 ">Add New Video</p>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                Title
              </label>
              <input type="text" id="defaultFormContactNameEx" className="form-control" />
              <br />
              

              <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                Decription
              </label>
              <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
              <br />
              

              <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                Upload Video File
              </label>
              <input type="file"  className="form-control"/>
              
              <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                Video Type
              </label>
              <select className="form-control">
                <option value="grapefruit">Public</option>
                <option value="lime">Private</option>
            </select>
            <br />         
            <br />
              <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                Emails To Add
              </label>
              <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
              <div className="text-center mt-4">       
                       
                      </div>
                      <button  className="form-control"   onClick={() => gotoList()} >Upload Video</button>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
    )
}

export default AddVideo
