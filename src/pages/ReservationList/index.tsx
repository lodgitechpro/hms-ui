import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CommentIcon from "@mui/icons-material/Comment";

function ReservationList() {
  let navigate = useNavigate();
  const [checked, setChecked] = useState([""]);
  const [expanded, setExpanded] = useState<string | null>(null);
  
  const handleToggle = (value: string) => () => {
    console.log("sdfljdsf")
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleExpand = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : null); // Fix: Use null when collapsed
  };

  const reservations = [
    {
        id: "1",
        name: "Sallar Bhutto",
        roomType: "Delux",
        bookingStatus: "Confirmed"
    },
    {
        id: "2",
        name: "Munawar Shaikh",
        roomType: "Delux",
        bookingStatus: "Confirmed"
    },
    {
        id: "3",
        name: "Jay Syed",
        roomType: "Delux",
        bookingStatus: "Confirmed"
    },
    {
        id: "4",
        name: "Kuntal",
        roomType: "Delux",
        bookingStatus: "Confirmed"
    }
  ]
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw", // Full width of the viewport
        height: "100vh", // Full height of the viewport
      }}
    >
      <Box
        style={{
          textAlign: "center",
        }}
      >
        <Paper elevation={3}>
          <Box
            style={{
              padding: 20,
              width: "40vw",
              height: "45vh",
            }}
          >
            <Box
              style={{
                textAlign: "center",
                fontSize: "24px", // Adjust font size as needed
                fontWeight: "bold", // Optional, makes text bold
              }}
            >
              Reservation List
            </Box>

            {/* <Box  sx={{
                maxHeight: "25vh", // Set a max height to enable scrolling
                overflowY: "auto", // Enables vertical scrolling when content overflows
            }}>
            <List sx={{ width: "100%" }} >
              {reservations.map((value) => {
                const labelId = `checkbox-list-label-${value.id}`;

                return (
                  <>
                  <ListItem
                    key={value.id}
                    secondaryAction={
                      <IconButton edge="end" aria-label="comments">
                        <CommentIcon />
                      </IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton
                      role={undefined}
                      // onClick={handleToggle(value.id)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.includes(value.id)}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
                          onClick={handleToggle(value.id)}
                        />
                      </ListItemIcon>
                      <ListItemText
                        id={labelId}
                        primary={`${value.name}`}
                        secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                              >
                                {value.roomType}
                              </Typography>
                             {`- ${value.bookingStatus}`}
                            </React.Fragment>
                          }
                      />
                    </ListItemButton>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  </>
                );
              })}
            </List>
            </Box> */}
 <Box sx={{ maxHeight: "35vh",overflowY: "auto",}}>
 {reservations.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id} // Fix: Compare against string or null
          onChange={handleExpand(item.id)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItem disablePadding>
              {/* Checkbox (Clicking only affects the checkbox state) */}
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.includes(item.id)}
                    onClick={(e) => e.stopPropagation()} // Prevent accordion toggle
                    onChange={handleToggle(item.id)}
                />
              </ListItemIcon>

              {/* Primary text (Clicking expands/collapses the accordion) */}
              <Typography variant="body1">{item.name}</Typography>
            </ListItem>
          </AccordionSummary>

          {/* Expandable Details */}
          <AccordionDetails>
          <Box style={{ display:"flex",justifyContent:"space-between", alignItems:"flex-start"}}>
            <Typography variant="body2">
              <strong>Room Type:</strong> {item.roomType}
            </Typography>
            <Typography variant="body2">
              <strong>Status:</strong> {item.bookingStatus}
            </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>

            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button
                style={{ marginRight: "8px", marginTop: "10px" }}
                variant="outlined"
                size="small"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </Button>
              <Button
                style={{ marginRight: "8px", marginTop: "10px" }}
                variant="contained"
                size="small"
                onClick={() => {
                  navigate("/");
                }}
              >
                Next
              </Button>
            </div>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

export default ReservationList;
