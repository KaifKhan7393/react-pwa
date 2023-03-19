import FormField from "./input-field";
const Form = () => {
    return (
        <form action="" className="w-[90%] max-w-[500px] p-4 mx-auto flex flex-col gap-3 border border-cyan-500">
            <FormField name="Email" type="emai" placeholder="Email" />
            <FormField name="Password" type="password" placeholder="Password" />
            <button className="bg-cyan-500 text-white p-2 rounded-md max-w-fit px-10 mx-auto hover:bg-cyan-600">Submit</button>
        </form>
    )
}

export default Form;