import { use, useEffect, useState } from "react";
import img1 from "./assets/1.png";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import RiderDashboard from "./pages/RiderDashboard.jsx";
import DriverDashboard from "./pages/DriverDashboard.jsx";

function App() {
  const [role, setRole] = useState("guest");
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [currentPage, setCurrentpage] = useState("home");
  //currentPage
  //useEffect role->setCurrentpage

  const handleLogin = (data) => {
    setRole(data.role.toLowerCase());
    setShowAuth(false);
    setCurrentpage(data.role.toLowerCase());
  };

  const handleSignup = () => {
    setAuthMode("login");
  };

  useEffect(() => {
    if (role === "rider") setCurrentpage("rider");
    else if (role === "driver") setCurrentpage("driver");
    else setCurrentpage("home");
  }, [role]);

  // Logout handler
  const handleLogout = () => {
    setRole("guest");
    setCurrentpage("home");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50 w-screen">
        <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚗</span>
              <span className="font-bold text-xl">Rideshare</span>
            </div>
            <div>
              {role === "guest" ? (
                <button
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
                  onClick={() => setShowAuth(true)}
                >
                  Login/Signup
                </button>
              ) : (
                <button
                  className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto w-full">
          {currentPage === "rider" ? (
            <RiderDashboard />
          ) : currentPage === "driver" ? (
            <DriverDashboard />
          ) : (
            <>
              {/* Home Section */}
              <section className="py-16 w-full bg-gray-100 flex flex-col md:flex-row items-center justify-center gap-12 ">
                <div className="flex-1 flex flex-col justify-center items-start max-w-xl px-6">
                  <h2 className="text-4xl font-bold mb-2 text-gray-900">
                    Get Quick Rides,
                    <br />
                    <span className="inline-block border-b-4 border-yellow-400 pb-1">
                      Low Fares
                    </span>
                  </h2>
                  <p className="text-xl text-gray-700 mb-8 mt-4">
                    In Rapido we ensure our customers get rides quickly at the
                    most affordable prices.
                  </p>
                  <button className="bg-gray-900 text-white text-lg font-semibold px-8 py-3 rounded-full flex items-center gap-2 shadow hover:bg-gray-800 transition">
                    Book a ride <span className="ml-2">&rarr;</span>
                  </button>
                </div>
                <div className="flex-1 flex justify-center items-center max-w-lg px-6">
                  <img
                    src={img1}
                    alt="Service Collage"
                    className="rounded-2xl object-cover w-full h-80"
                  />
                </div>
              </section>

              {/* How it works */}
              <section className="py-16 w-full bg-gradient-to-r  from-yellow-50 to from-blue-50">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                  How it Works
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
                  {[
                    {
                      icon: "📱",
                      title: "Request a Ride",
                      desc: "Enter your pickup and drop locations and request a ride instantly.",
                    },
                    {
                      icon: "🤝",
                      title: "Get Matched",
                      desc: "We match you with the nearest driver for a quick pickup.",
                    },
                    {
                      icon: "🛵",
                      title: "Enjoy Your Trip",
                      desc: "Sit back, relax, and enjoy a safe, affordable ride.",
                    },
                    {
                      icon: "💳",
                      title: "Easy Payment",
                      desc: "Pay seamlessly with cash, card, or wallet after your ride.",
                    },
                  ].map((step, idx) => (
                    <div
                      key={step.title}
                      className="flex flex-col items-center bg-white rounded-xl p-6 w-64 transition-transform hover:-translate-y-2"
                    >
                      <div className="text-5xl mb-4">{step.icon}</div>
                      <h3 className="font-bold text-lg mb-2 text-gray-800">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-center">{step.desc}</p>
                      {idx < 3 && (
                        <div className="w-8 h-1 bg-yellow-400 mt-4 mb-0"></div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Stats */}
              <section className="py-16 w-full bg-white">
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-12">
                  {[
                    { label: "Rides Completed", value: "1M+" },
                    { label: "Rides 1", value: "1M+" },
                    { label: "Rides 2", value: "1M+" },
                    { label: "Rides 3", value: "1M+" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center"
                    >
                      <div className="text-4xl font-extrabold text-blue-600 mb-2 animate-pulse">
                        {stat.value}
                      </div>
                      <div className="text-lg text-gray-700 font-semibold">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Why Choose Us Section */}
              <section className="py-16 w-full bg-gradient-to-r from-blue-50 to-purple-50">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                  Why Choose Us?
                </h2>
                <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                  {[
                    {
                      icon: "⏱️",
                      title: "Instant Booking",
                      desc: "Book a ride in seconds with our easy-to-use app.",
                    },
                    {
                      icon: "🛡️",
                      title: "Verified Drivers",
                      desc: "All drivers are background-checked and trained.",
                    },
                    {
                      icon: "💸",
                      title: "Affordable Fares",
                      desc: "Transparent pricing with no hidden charges.",
                    },
                    {
                      icon: "📍",
                      title: "Live Tracking",
                      desc: "Track your ride in real-time from start to finish.",
                    },
                    {
                      icon: "📞",
                      title: "24/7 Support",
                      desc: "We're here for you anytime, anywhere.",
                    },
                  ].map((benefit) => (
                    <div
                      key={benefit.title}
                      className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-64 transition-transform hover:-translate-y-2 hover:shadow-xl"
                    >
                      <div className="text-4xl mb-4">{benefit.icon}</div>
                      <h3 className="font-bold text-lg mb-2 text-gray-800">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Download */}
              <section className="py-16 w-full bg-black">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">
                  Download Now
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
                  <div className="flex flex-col items-center">
                    <img
                      src={img1}
                      alt=" Rapido App"
                      className="w-20 h-20 mb-4 rounded-lg"
                    />
                    <div className="text-white text-center font-semibold">
                      Rapido: Bike-Taxi, Auto & Cabs
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={img1}
                      alt=" Rapido App"
                      className="w-20 h-20 mb-4 rounded-lg"
                    />
                    <div className="text-white text-center font-semibold">
                      Rapido Captain: Drive & Earn
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </main>

        {showAuth && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className=" bg-white rounded-xl p-8 w-full max-w-md relative">
              <h2 className="text-2xl font-bold mb-4">
                {authMode === "login" ? "Login" : "SignUp"}
              </h2>
              <div className="flex gap-2 mb-4">
                <button
                  className={`flex-1 py-2 rounded ${
                    authMode === "login"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => setAuthMode("login")}
                >
                  Login
                </button>
                <button
                  className={`flex-1 py-2 rounded ${
                    authMode === "signup"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => setAuthMode("signup")}
                >
                  Signup
                </button>
              </div>
              {authMode === "login" ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Signup onSignup={handleSignup} />
              )}
            </div>
          </div>
        )}
        <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
          &copy; {new Date().getFullYear()} Rideshare. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
