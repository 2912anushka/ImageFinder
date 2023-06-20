import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Zoom from '@mui/material/Zoom';
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';

class ImageResults extends Component{
    state={
        open:false,
        currentImg:''
    }
    handleOpen=img=>{
        this.setState({open:true,currentImg:img})
    }
    handleClose=()=>{
        this.setState({open:false});
    }
    render()
    {
        let imageList;
        const {images}=this.props

    

        

        // Rest of your code
        
        if (images) {
          imageList = (
            <Grid container spacing={1}>
              {images.map((img) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={img.id}>
                  <Grid container alignItems="center" justifyContent="center">
                    <Grid item>
                      <img src={img.largeImageURL} alt="" />
                    </Grid>
                    <Grid item>
                      <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                        <Zoom />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          );
        }
        
        // Rest of your code
        

        else{
            imageList=null;
        }
        const actions=[
            <Button  label="Close" primary={true} onClick={this.handleClose}/>
        ]
        return(
            <div style={{marginLeft:50,marginRight:50,marginTop:20}}>
            {imageList}
            <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            >
            <img src={this.state.currentImg} alt="" style={{width:'100%'}} />
            </Dialog>
            </div>
        )
    }
}
ImageResults.propTypes={
    images:PropTypes.array.isRequired
}

export default ImageResults;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Grid, IconButton, Dialog, Button } from '@mui/material';
// import Zoom from '@mui/material/Zoom';

// class ImageResults extends Component {
//   state = {
//     open: false,
//     currentImg: ''
//   };

//   handleOpen = (img) => {
//     this.setState({ open: true, currentImg: img });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { images } = this.props;

//     let imageList;

//     if (images) {
//       imageList = (
//         <Grid container spacing={1}>
//           {images.map((img) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={img.id}>
//               <Grid container alignItems="center" justifyContent="center">
//                 <Grid item>
//                   <img src={img.largeImageURL} alt="" />
//                 </Grid>
//                 <Grid item>
//                   <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
//                     <Zoom />
//                   </IconButton>
//                 </Grid>
//               </Grid>
//             </Grid>
//           ))}
//         </Grid>
//       );
//     } else {
//       imageList = null;
//     }

//     const actions = [
//       <Button label="Close" onClick={this.handleClose} />
//     ];

//     return (
//       <div style={{ marginLeft: 50, marginRight: 50, marginTop: 20 }}>
//         {imageList}
//         <Dialog
//           open={this.state.open}
//           onClose={this.handleClose}
//           fullWidth
//           maxWidth="md"
//         >
//           <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
//           <Button label="Close" onClick={this.handleClose} />
//         </Dialog>
//       </div>
//     );
//   }
// }

// ImageResults.propTypes = {
//   images: PropTypes.array.isRequired
// };

// export default ImageResults;
