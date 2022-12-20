const Plan = (props) =>{
    return <>
    <li className="form-field__input p-2 my-4 col-9">
        {props.value}
    </li>
    <button type="submit" className="button button-1 mx-auto btn-close my-4" onClick= {() =>{ props.data(props.id) }}/>
    </>
    
}
export default Plan