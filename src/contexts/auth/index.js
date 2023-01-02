import React, { useState, useEffect, useContext } from "react";
// we are making context to store data in seperate place where all the components can use it
const AuthContext = React.createContext({});
const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }) => {
  //making state it will true if user will be logged in else it will false
  const [isLogin, setIsLogin] = useState(false);
  // this function will run when user will be successfully login
  const loginSuccess = (token, user) => {
    // it will set the user and token coming from the backend to the localStorage so that we can use them later
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    setIsLogin(true);
  };

  // this function will run when user will click on signout it will just remove the token and from localstorage
  const signOut = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };
  // this function will run when we will referesh the page every time then it will check if token is present in local Storage if present then it will set the login state true
  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  };
  // useEffect will run every time first when we will render this component
  useEffect(() => {
    checkToken();
  }, []);

  return (
    // we making the provider with exporting the state so we can access them in another components
    <AuthContext.Provider value={{ isLogin, loginSuccess, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthConsumer, AuthProvider };
