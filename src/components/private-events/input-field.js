

const InputField = ({ label,bodyClass,inputClass,value, ...props }) => {
    return (
        <div className={[
                "h-fit flex flex-col font-primary",
                bodyClass
            ].join(' ')}
        >
            <label className="px-3 mb-1
            text-secondary
            "
            >
                {label}
            </label>
            
            <input 
            className={[
                "h-8 px-4 text-royal rounded-md",
                "focus:outline-none font-primary"
            ].join(' ')}
            
            value={value}
            {...props} 
            />
        </div>
    );
}
 
export default InputField;