import React, { useState } from "react";
import TableView from "./tableview";
import BusinessCardView from "./BusinessCardView";

function AddressBook() {
  const [isTableView, setIsTableView] = useState(true);

  const handleTabClick = (isTable) => {
    setIsTableView(isTable);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick(true)}>Table View</button>
        <button onClick={() => handleTabClick(false)}>Business Card View</button>
      </div>
      {isTableView ? <TableView /> : <BusinessCardView />}
    </div>
  );
}

export default AddressBook;
