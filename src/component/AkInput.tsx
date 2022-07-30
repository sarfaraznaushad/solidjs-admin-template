import { Component } from 'solid-js';
import { ControlMetaData } from '../models/control.metadata';

const AkInput: Component = (props: ControlMetaData) => {
    return (
        <>
          <label for={props.Label}>Email</label>
          <input id={props.Name} type={props.Type} name={props.Name} />
        </>
    )
};

export default AkInput;