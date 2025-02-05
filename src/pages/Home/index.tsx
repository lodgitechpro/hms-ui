import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

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
                Welcome to HMS! 
              </Box>
              <Box
                style={{
                  gap: "16px",
                  height: "80%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  style={{ width: "220px" }}
                  variant="contained"
                  onClick={() => {
                    navigate("/exisitngReservation")
                  }}
                >
                  Existing reservation
                </Button>

                <Button
                  style={{ width: "220px" }}
                  variant="contained"
                  onClick={() => console.log("check")}
                >
                  New reservation
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </div>
  );
}

export default Home;
