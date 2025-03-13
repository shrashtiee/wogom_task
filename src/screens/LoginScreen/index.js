import React, { useState } from "react";
import { Alert, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions"; 
import LoginView from "./view";

const LoginScreen = ({ loginUser, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // if (!email || !password) {
    //   Alert.alert("Error", "Please enter email and password.");
    //   return;
    // }
    // setLoading(true);
    const success = await loginUser(email, password);
    setLoading(false);

    // if (success) {
      navigation.navigate("HomeScreen"); // Navigate to Home on success
    // } else {
    //   Alert.alert("Login Failed", "Invalid credentials. Please try again.");
    // }
  };

  return (
    <LoginView
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      loading={loading}
    />
  );
};

export default connect(null, { loginUser })(LoginScreen);
