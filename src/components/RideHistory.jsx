export default function RideHistory() {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchRides = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await apiRequest("/rides/history", "GET", null, token);
      setRides(data);
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

  if (loading) return <div>Loading ride history..</div>;
  if (error) <div className="text-red-500 mb-4">{error}</div>;
  if (!rides || rides.length === 0) return <div>No rides found </div>;
  return (
    <div>
      <h2>Ride History</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride, idx) => (
              <tr>
                <td>{ride.pickupLocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
