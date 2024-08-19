'use client'

import './Main.scss';
import Event from "@/components/event/Event";
import MainHeader from "@/layout/main-header/Main-header";
import {UserService} from "@/services/user.service"
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";

const Main = () => {

    const objectCount = [1, 2, 4, 5];

    function getf() {
        return useQuery({
            queryKey: ['posts'],
            queryFn: async (): Promise<any> => UserService.getData(),
        })
    }


    const {data, isFetching, status, error} = getf();

    if (!error) {
        console.log(error)
    }

    return (
        <div className="MainPage">
            <MainHeader/>
            {JSON.stringify(data)}
            {objectCount.map((item, index) =>
                <div className="event" key={index}>
                    <Event/>
                </div>
            )}
        </div>
    );
};

export default Main;