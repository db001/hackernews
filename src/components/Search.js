import React from 'react';

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

const Search = ({ value, onChange, children }) => 
    <form>
      {children}<input
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>;


export default Search;