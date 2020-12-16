import React from 'react'
import { func, string } from 'prop-types';

const Toggle = ({theme,  toggleTheme }) => {
    return (
        <div>
        <input onClick={toggleTheme}type="checkbox" id="toggle" className="checkbox" />
        <label htmlFor="toggle" className="switch"></label>
        </div>
    );
}
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;