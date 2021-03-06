import React from 'react';

/*
--- Refactored to stateless functional component ---

class Button extends Component {
    render() {
      const {
        onClick,
        className = '',
        children
      } = this.props;
  
      return (
        <button
          onClick={onClick}
          className={className}
          type="button">
          {children}
        </button>
      )
    }
  }
*/

const Button = ({ onClick, className = '', children, type }) =>
    <button
    onClick={onClick}
    className={className}
    type={type}>
    {children}
  </button>;

export default Button;