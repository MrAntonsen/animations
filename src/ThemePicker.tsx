import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import './ThemePicker.scss'

export interface iThemePickerState{}
export interface iThemePickerProps{}


export default class ThemePicker extends Component<iThemePickerProps,iThemePickerState> {
    render() {
        return (
            <div className="ThemePicker-container">
                <FontAwesomeIcon
                          icon={faBrush}
                          color="red"
                          className="ThemePicker-icon"
                          onClick={() => {}}
                        />
            </div>
        )
    }
}
