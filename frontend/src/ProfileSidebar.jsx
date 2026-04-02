import React, { useEffect, useState } from "react";
import axios from "axios";
import "./assets/css/profileSidebar.css";

function ProfileSidebar({ isOpen, closeSidebar }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/auth/me", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3002/api/auth/logout",
        {},
        { withCredentials: true },
      );
      setUser(null);
      closeSidebar();

      window.location.href = "/login";
    } catch {
      console.error("Logout failed");
    }
  };

  return (
    <div className={`profile-sidebar ${isOpen ? "open" : ""}`}>
      {/* Top Section */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h6 style={{ margin: 0, fontWeight: "600", color: "#ffffff" }}>
            Profile
          </h6>

          <button className="close-btn" onClick={closeSidebar}>
            ✕
          </button>
        </div>

        {loading ? (
          <p style={{ textAlign: "center", color: "#475569" }}>Loading...</p>
        ) : user ? (
          <div className="profile-header">
            <div className="profile-avatar">
              {user.username.charAt(0).toUpperCase()}
            </div>

            <div className="profile-username">{user.username}</div>

            <div className="profile-email">{user.email}</div>
          </div>
        ) : (
          <div className="profile-header">
            <div className="profile-avatar">?</div>

            <div className="profile-username">Welcome Guest</div>

            <div className="profile-email">Login to access your account</div>
          </div>
        )}
      </div>

      {/* Bottom Section (Buttons) */}
      <div>
        {user ? (
          <button onClick={handleLogout} className="sidebar-btn btn-logout">
            Logout
          </button>
        ) : (
          <>
            <button
              className="sidebar-btn btn-blue"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </button>

            <button
              className="sidebar-btn btn-outline-blue"
              onClick={() => (window.location.href = "/signup")}
            >
              Signup
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileSidebar;
