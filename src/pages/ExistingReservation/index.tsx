import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MuiTelInput } from 'mui-tel-input'

function ExisitngReservation() {
  let navigate = useNavigate();
  const [phone, setPhone] = React.useState('')
  const handleChange = (newPhone: any) => {
    setPhone(newPhone)
  }

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
              height: "25vh",
            }}
          >
            <Box
              style={{
                textAlign: "center",
                fontSize: "24px", // Adjust font size as needed
                fontWeight: "bold", // Optional, makes text bold
              }}
            >
              Reservation Details
            </Box>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "100%" }, mt: 2, alignItems:"center", justifyContent:"center" }}
              noValidate
              autoComplete="off"
            >
              <div style={{ display: "flex" }}>
                <TextField
                required
                  error={false}
                  id="outlined-error"
                  label="Reservation No."
                  size="small"
                />
                <TextField
                required
                  error={false}
                  id="outlined-error"
                  label="Last Name"
                  size="small"
                />
              </div>
              <div style={{ display: "flex" }}>
              <MuiTelInput defaultCountry={"US"} size="small" value={phone} onChange={handleChange} />
                {/* <TextField
                  error={false}
                  id="outlined-error"
                  label="Phone No."
                  size="small"
                /> */}
                <TextField
                  error={false}
                  id="outlined-error"
                  label="Email"
                  size="small"
                  type="email"
                />
              </div>
              <div style={{ width:"100%",display: "flex", alignItems: "center", justifyContent:"flex-end" }}>
              <Button
                  style={{ marginRight:"8px", marginTop:"10px" }}
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back
                </Button>
                <Button
                  style={{ marginRight:"8px", marginTop:"10px" }}
                  variant="contained"
                  size="small"
                  onClick={() => {
                    navigate("/reservationList");
                  }}
                >
                  Next
                </Button>
              </div>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

export default ExisitngReservation;
