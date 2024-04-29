import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { ToastContainer } from "react-toastify";
import Chatbot from "react-simple-chatbot";


function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const isAuth = Boolean(useSelector((state) => state.token));



    const steps = [{
            id: 'Greet',
            message: 'welcome to rajasthan police feedback system chatbot',
            trigger: 'Ask Name'
        },
        {
            id: 'Ask Name',
            user: true,
            message: 'please enter your problem',
            trigger: 'waiting1'
        },
        {
            id: 'waiting1',
            options: [{
                value: 'React',
                label: 'Hello',
                trigger: "Greet"
            }],
        }
    ]

    return ( <
        div className = "app" >
        <
        BrowserRouter >
        <
        ThemeProvider theme = { theme } >
        <
        ToastContainer / >
        <
        CssBaseline / >
        <
        Routes >
        <
        Route path = "/"
        element = { < LoginPage / > }
        /> <
        Route path = "/home"
        element = { isAuth ? < HomePage / > : < Navigate to = "/" / > }
        /> <
        Route path = "/profile/:userId"
        element = { isAuth ? < ProfilePage / > : < Navigate to = "/" / > }
        /> <
        /Routes> <
        /ThemeProvider> <
        /BrowserRouter> <
        Chatbot steps = { steps }
        style = {
            {
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                width: '300px', // Adjust the width as needed
                height: '400px', // Adjust the height as needed
            }
        }
        /> <
        /div>
    );
}

export default App;