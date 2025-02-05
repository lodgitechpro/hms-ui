import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from "../App"
import { ExisitngReservation, ReservationList } from '../pages';


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/exisitngReservation" element={<ExisitngReservation />} />
        <Route path="/reservationList" element={<ReservationList />} />
      </Routes>
  )
}

export default AppRoutes;