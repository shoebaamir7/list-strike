import React from 'react';
import classes from './TitleNote.module.css'

const TitleNote = (props) => {
    const {list} = props;
    const deletedItems = list.filter( (item) => item.isStrike == true)
    const titleText = list.length > 0 ? <div className={classes.titleCss}>
        <div>Active: {list.length-deletedItems.length}</div>
        <div>Deleted: {deletedItems.length}</div>
        <div>Total: {list.length}</div>
      </div>: null;
    return (
         titleText
    );
}
 
export default TitleNote;