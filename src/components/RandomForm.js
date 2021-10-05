import { useState } from "react";

const RandomForm = (props) => {
    const [values, setValues] = useState({ firstName: '', lastName: '', email: '' });
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <form>
            <input name="firstName" onChange={handleChanges} value={values.firstName} />
            <input name="lastName" onChange={handleChanges} value={values.lastName} />
            <input name="email" onChange={handleChanges} value={values.email} />
        </form>
    )
}

export default RandomForm;