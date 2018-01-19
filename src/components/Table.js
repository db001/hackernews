


{list
    .filter(isSearched(searchTerm))
    .map(item => 
    (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
          <button
            onClick={() => this.onDismiss(item.objectID)}
            type="button">
            Dismiss
          </button>
        </span>
      </div>
    )
  )}