import { useForm } from "../hooks/useForm"

const initial = {
    one: '',
    two: ''
}

const OtherForm = (props) => {
    const [values, handleChanges, third] = useForm(initial);
    return (
        <form>
            <input name="one" value={values.one} onChange={handleChanges} />
            <input name="two" value={values.two} onChange={handleChanges} />
            <button type="button" onClick={third}>Alert</button>
        </form>
    )
}

export default OtherForm;