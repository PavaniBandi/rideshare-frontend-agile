import { useEffect, useState } from "react";
import { apiRequest } from "../api";
import RideBookingForm from "../components/RideBookingForm";
import RideStatus from "../components/RideStatus";
import RideHistory from "../components/RideHistory";

export default function RiderDashboard() {
  const [rides, setRides] = useState([]);
  const [currentRide, setCurrentRide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchRides = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await apiRequest("/rides/history", "GET", null, token);
      setRides(data);
      const active = data.find((r) => r.status != "COMPLETED");
      setCurrentRide(active || null);
    } catch (err) {
      setError("Failed to fetch " + err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRides();
  }, []);

  const handleRefresh = () => {
    fetchRides();
  };
  return (
    <div>
      {/* Welcome banner */}
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {!currentRide && (
            <div className="mb-8">
              <RideBookingForm onBook={handleRefresh} />
            </div>
          )}
          {currentRide && (
            <div className="mb-8">
              <RideStatus ride={currentRide} onComplete={handleRefresh} />
            </div>
          )}
          <RideHistory />
          {/* Tips Section */}
        </>
      )}
    </div>
  );
}
