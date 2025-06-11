import { useState, useRef } from "react";

const SearchableList = ({ items, itemKeyFn, children }) => {
  const lastChange=useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    if(lastChange.current) {
      clearTimeout(lastChange.current)//clear the previous timer, not the timeout Id
    }

    lastChange.current= setTimeout(()=>{
      setSearchTerm(event.target.value)}, 500);//If the user types again before 500ms, the previous timeout is canceled again. Only when the user stops typing for 500ms, the function runs and updates the state.
      lastChange.current = null// clear the old timeout ID
    ;
  }

  return (
    <div className="searchable-lost">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
