import { useState } from "react";

export default function DriverDashboard() {
  const [activeRides, setActiveRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");
  const myUserId = localStorage.getItem("userId");

  const fetchRides = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await apiRequest("/rides/requested", "GET", null, token);
      setActiveRides(data);
    } catch (err) {
      setError("Failed to fetch " + err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRides();
    const interval = setInterval(fetchRides, 10000);
    return () => clearInterval(interval);
  }, []);

  const updateStatus = async (rideId, status) => {
    try {
      await apiRequest(`rides/status/${rideId}`, "POST", { status }, token);
      fetchRides();
    } catch (err) {
      setError("Failed to update " + err.message);
    }
  };

  const acceptRide = async (ride) => {
    try {
      await apiRequest(
        `rides/status/${ride.id}`,
        "POST",
        { status: "ACCEPTED", driverId: myUserId },
        token
      );
      fetchRides();
    } catch (err) {
      setError("Failed to update " + err.message);
    }
  };
  return <h2>Driver</h2>;
}
