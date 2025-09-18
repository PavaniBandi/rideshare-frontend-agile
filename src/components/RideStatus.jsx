import { useEffect, useState } from "react";
import { apiRequest } from "../api";

export default function RideStatus({ ride, onComplete }) {
  const token = localStorage.getItem("token");
  const [currentRide, setCurrentRide] = useState(ride);

  useEffect(() => {
    setCurrentRide(ride);
    if (!ride) return;
    const fetchStatus = async () => {
      try {
        const data = await apiRequest(
          `/rides/status/${ride.id}`,
          "GET",
          null,
          token
        );
        setCurrentRide(data);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 10000);
    return () => clearInterval(interval);
  }, [ride]);

  useEffect(() => {
    if (currentRide && currentRide.status === "COMPLETED") {
      onComplete && onComplete();
    }
  }, [currentRide, onComplete]);

  const statusSteps = [{ key: "REQUESTED", label: "Requested", icon: "" }, {}];
  return <h2>RideStatus</h2>;
}
