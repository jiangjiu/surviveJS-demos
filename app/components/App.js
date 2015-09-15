import React from 'react';
//import Note from './Note.js';
import Notes from './Notes';
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
                <Notes items={notes}/>
            </div>
        )
    }

}
