import React, { useState } from "react";
import AddForm from "../AddForm/AddForm";
import List from "../List/List";
import classes from "./App.module.css";
import TitleNote from '../TitleNote/TitleNote';

const App = () => {
  const [list, setList] = useState([]);

  function setStrike(listItem) {
    let index = list.findIndex( (item) => item.id == listItem.id);

    setList([
      ...list.slice(0,index),
      Object.assign({}, list[index], listItem),
      ...list.slice(index+1)
    ]);
  }
  return (
    <div className={classes.App}>
      <div className={classes.Main}>
        <h1 className={classes.marginAuto}>List Example</h1>
        <AddForm list={list} setList={ setList } />
        <TitleNote list={list} />
        <List list={list} setStrike={setStrike} />
      </div>
    </div>
  );
};

export default App;
