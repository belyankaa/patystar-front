import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import './App.scss';

import Header from "./core/layout/header/Header";
import Footer from "./core/layout/footer/Footer";
import Main from "./core/pages/main/Main";
import Login from "./core/pages/authorization/login/Login";
import Search from "./core/pages/search/Search";
import AddPost from "./core/pages/add-post/AddPost";
import ParticipatingEvents from "./core/pages/participating-events/ParticipatingEvents";
import Profile from "./core/pages/profile/Profile";

function App() {
    return (
        <div className="App">
            <Header/>

            <div className="routes">
                <Routes>
                    {/*Авторизация*/}
                    {/*loader={redirectIfUser} вставить в Route как интерсептор но проверить*/}
                    <Route path="login" element={<Login/>}/>

                    {/*Основаные страницы*/}
                    <Route path="/" element={<Main/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/add-post" element={<AddPost/>}/>
                    <Route path="/participating-events" element={<ParticipatingEvents/>}/>
                    <Route path="/profile" element={<Profile/>}/>

                    {/*Редирект*/}
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
