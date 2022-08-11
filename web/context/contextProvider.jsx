import { useContext, createContext, useState } from "react";
import { useAlert } from "react-alert";
import axios from 'axios';


const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const alert = useAlert();
    // background Blur
    const [blur, setblur] = useState(false);

    const blurOn = () => {
        setblur(true)
    }
    const blurOff = () => {
        setblur(false)
    }

    // open menu with hamburger
    const [menu, setmenu] = useState(false);
    const openMenu = () => {
        blurOn();
        setmenu(true);
    }
    const closeMenu = () => {
        blurOff();
        setmenu(false);
    }

    // contact function with form
    const [load, setload] = useState(false);
    const loadStart = ()=>{
        setload(true);
        blurOn();
    };
    const loadEnd = ()=>{
        setload(false);
        blurOff();
    };
    const initialstate = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        message: "",
    }
    const [data, setdata] = useState(initialstate);
    const handleChange = (e) => {
        setdata(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        loadStart()
        e.preventDefault();
        try {
            const res = await axios.post("/api/contact", data);
            alert.success(res.data.message);
            setdata(initialstate);
            loadEnd();
        } catch (err) {
            loadEnd();
            alert.error(err.response.data.message);
        }
    }

    return (
        <StateContext.Provider
            value={{
                openMenu, closeMenu, menu,
                handleChange, handleSubmit, data,
                blur,
                load
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

const useStateContext = () => useContext(StateContext);
export default useStateContext;