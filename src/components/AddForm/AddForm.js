import React, { useRef } from 'react';
import classes from './AddForm.module.css';

const AddForm = (props) => {
  const {setList, list} = props;
  const inputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue.trim() == "") {
      return;
    }
    const newListItem = {
      id: Date.now(),
      item: inputValue,
      isStrike: false,
    };
    setList([...list, newListItem]);
    inputRef.current.value = "";
  }

  return (
    <div>
      <form className={classes.form} onSubmit={ submitHandler }>
        <div className={classes.control}>
          <input type="text" ref={inputRef} />
        </div>
        <div className={classes.control}>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;