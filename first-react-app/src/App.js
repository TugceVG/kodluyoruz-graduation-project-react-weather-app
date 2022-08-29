import React from "react";
import LoginForm from "./components/LoginForm";

//https://api.openweathermap.org/data/2.5/weather?units=metric&q=Istanbul,tr&APPID=b039e459b151af4b3a20ad890b34942e
function App() {
  const adminUser = { username: "admin", password: "admin" }

  return (
    <div>
      <LoginForm adminUser={adminUser} />
    </div >
  )

}

export default App;
