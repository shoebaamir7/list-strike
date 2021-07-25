import React from "react";

const List = (props) => {
  const { list, setStrike } = props;

  return list.length > 0 ? (
    list.map((listItem) => {
      const renderedItem = listItem.isStrike ? (<del>{listItem.item}</del>) : (listItem.item);

      return (
        <div
          key={listItem.id}
          onClick={(e) => setStrike({ ...listItem, isStrike: !listItem.isStrike })}
        >
          {renderedItem}
        </div>
      );
    })
  ) : (
    <div>Add items to the list</div>
  );
};

export default List;