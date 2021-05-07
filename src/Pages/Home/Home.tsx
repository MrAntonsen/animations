import React, { Component, Dispatch, SetStateAction } from 'react'
import ThemePicker from '../../ThemePicker'
import './Home.scss'
interface IHomeProps{
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}
interface IHomeState{}
export default class Home extends Component<IHomeProps,IHomeState> {
    render() {
        return (
            <>
            <ThemePicker />
            <div className="home-container">
                <h1>Home</h1>
            </div>
            </>
        )
    }
}
