import Layout from "../layout/Layout";
import {selectUser, selectUserOrders} from "../../selectors";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser, getUserOrders} from "../../actions";
import Loading from "../layout/Loading";


function UserPage(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUser())
        dispatch(getUserOrders())
    }, [dispatch]);

    const user = useSelector(selectUser);
    const orders = useSelector(selectUserOrders)

    if(user === null){
        return <Loading/>
    }


    return (
        <Layout>
            <div className="row row-cols-md-auto justify-content-center my-3">
                <div className="col">
                   <h3 className="text-center">{user.firstName} {user.secondName}</h3>
                    <h4 className="text-center">{user.email}</h4>
                    {
                        orders.map(
                            ({createdAt, status, total})=>(
                                <div className="d-flex flex-row justify-content-around rounded shadow my-3 py-3 bg-soft-yellow">
                                    <div className="mx-3">{new Date(createdAt).toLocaleTimeString()}</div>
                                    <div className="mx-3">{status}</div>
                                    <div className="mx-3" >{total/100} грн</div>
                                </div>

                            )
                        )
                    }
                </div>
            </div>
        </Layout>


    )

}


export default UserPage;