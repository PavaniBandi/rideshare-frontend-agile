import { useEffect, useState } from "react";

export default function RideBookingForm() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [rideType, setRideType] = useState("Economy");
  const [paymentMode, setPaymentmode] = useState("Cash");
  const [fare, setFare] = useState(null);
  const [estimate, setEstimate] = useState(null);

  const home = "Kondapur";
  const office = "Hitech City";
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const rec = JSON.parse(localStorage.getItem("recentLocations" || "[]"));
    setRecent(rec);
  }, []);

  const saveRecent = (pickup, drop) => {
    const rec = JSON.parse(localStorage.getItem("recentLocations" || "[]"));
    rec = rec.filter((l) => l.pickup !== pickup || l.drop !== drop);
    rec.unshift({ pickup, drop });
    if (rec.length > 5) rec = rec.slice(0, 5);
    localStorage.setItem("recentLocations", JSON.stringify(rec));
    setRecent(rec);
  };

  /* 
  baseFare = 50
  *1.2
  *1.5

  useEffect
  */
  return <h2>Booking</h2>;
}
