const FormField = ({ name, ...otherProps }) => {
    return (
        <label class="block w-[90%] mx-auto">
            <span class="block text-lg font-medium text-slate-700 mb-4">{name}</span>
            <input type="email" {...otherProps} class="outline-0 p-2  border-cyan-500 border w-[100%]" />
        </label>
    )
}

export default FormField;