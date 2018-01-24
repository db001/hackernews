import React from 'react';
import Button from './Button';

/* Search is stateless so can be refactored as a stateless functional component */

/*
class Search extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <form>
        {children}<input
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
    );
  }
}
*/

const Search = ({
  value,
  onChange,
  onSubmit,
  children
}) => 
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
    <Button type="submit">
      {children}
    </Button>
  </form>;


export default Search;