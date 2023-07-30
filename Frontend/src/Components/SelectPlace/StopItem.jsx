import React from "react";
import AllStopButton from "./AllStopButton";
import classes from "../../styles/Stop.module.css";
import { TextField,Box ,InputAdornment} from "@mui/material";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const StopItem = ({ id, deleteStop, addStop, newStop, place, setplace }) => {
  return (
    <Box sx={{
      display:'flex',
      justifyContent:'left',
      alignItems:'left',
      // background:'green', 
      width:'20%',
    }}>
        <Box sx={{
      display:"flex",
      justifyContent:'left',
      alignItems:'left',

    }}> 
      <TextField  label="Stop"  value={place}onChange= {(e)=>{setplace(e.target.value, id);}} sx={{
            background:'white',
            width:'37rem',
            // border:'1px solid gray',
            borderRadius:'5px',
            color:'green',
            mr:3,
            display:'flex',
            justifyContent:'center',
            
          }} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddLocationAltIcon sx={{
                  color:'#17a2b8'
                }}/>
              </InputAdornment>
            ),
          }}/>
        <AllStopButton
          id={id}
          deleteStop={deleteStop}
          addStop={addStop}
          newStop={newStop}
        />
    </Box>
    </Box>
    
  );
};

export default StopItem;
