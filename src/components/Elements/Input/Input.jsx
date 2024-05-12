const Input = (props) => {
    // eslint-disable-next-line react/prop-types
    const {type, placeholder, name} = props;
    return (    
    <input 
    type={type} 
    className="text-s, border rounded w-full py-2 px-3 text-state-700 placeholder: opacity-50"
    placeholder={placeholder}
    name= {name}
    id = {name}
    />
);

}
export default Input;

//Tutorial React JS Bahasa Indonesia : 7.Conditional Rendering
//https://youtu.be/_kGqT8MaYRQ?si=FQo4nFxxCK84EPbE