import React, {useEffect} from "react";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux";
import {selectToasts} from "../../selectors";
import {useNavigate} from "react-router";
import {clearToast} from "../../actions";




function Toast()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let toastMessage = useSelector(selectToasts);


    useEffect(()=>{

        if (toastMessage !== null) {

            if (toastMessage.type === 'success') {
                toast.success(toastMessage.message, {onClose: ()=>{
                        dispatch(clearToast());
                        navigate("/");
                    }})
            }
            else if (toastMessage.type === 'error') {
                toast.error(toastMessage.message)
            }
        }

    }, [toastMessage, navigate]);


    return ( <ToastContainer position="bottom-right" autoClose={3000}/>)


}

export default Toast;