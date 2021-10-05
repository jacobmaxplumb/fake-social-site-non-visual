export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const doSomething = () => {
        alert('something');
    }

    return [values, handleChanges, doSomething];
}