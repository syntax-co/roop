


const TextArea = ({ label,bodyClass,inputClass,value, ...props }) => {
    return (
        <div className={[
                "h-fit flex flex-col font-primary",
                bodyClass
            ].join(' ')}
        >
            <label className="px-3 mb-1
            text-light
            "
            >
                {label}
            </label>

            <textarea 
            className={
                [
                "px-4 p-3 h-full  text-royal rounded-md",
                "focus:outline-none font-primary resize-none",
                inputClass
                ].join(' ')
            }
            value={value}
            {...props}
            />

        </div>
    );
}
 
export default TextArea;