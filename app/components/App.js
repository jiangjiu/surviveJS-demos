import React from 'react';
import Note from './Note.js';
import uuid from'node-uuid';

const notes = [
    {
        id:uuid.v4(),
        task:'Learn Webpack'
    },
    {
        id:uuid.v4(),
        task:'Learn React'
    },
    {
        id:uuid.v4(),
        task:'Do laundry'
    }
];



export default class App extends React.Component{
    render(){
        return(
            <div>
                <ul>{notes.map(App.renderNote)}</ul>
            </div>
        )
    }
    static renderNote(note) {
        return(
            <li key={`note${note.id}`}>
                <Note task={note.task}/>
            </li>
        )
    }

}
