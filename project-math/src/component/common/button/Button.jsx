import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'


function Button(props) {
    return (
        <button {...props} className={`button ${props.className}`} >{props.content}</button>
    )
}

Button.propTypes = {

}

export default Button

