import loading from './loading.gif'
const Spinner=(props)=>  {
 
    return (
      <div className="text-center my-3">
        <img src={loading} alt={props.loading}></img>
      </div>
    );
  
}

export default Spinner;
