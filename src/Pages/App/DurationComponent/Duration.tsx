import React, { Component, Dispatch, SetStateAction } from 'react'

interface IDurationProps{
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}
interface IDurationState{}
export default class Duration extends Component<IDurationProps, IDurationState> {
    render() {
        return (
            <div className="duration-container">
                <div className="duration-container-top-grid">

                </div>
                <div className="duration-container-bottom-grid" >
                    
                </div>
            </div>
        )
    }
}
