import cruasan from "../../assets/images/cruasan.webp";
import pechivo from "../../assets/images/pechivo.webp";
import sandvich from "../../assets/images/sandvich.webp";
import production from "../../assets/images/production.jpg";
import Layout from "../layout/Layout";
import Carousel from "../misc/Carousel";




function LandingPage(){
    const images = [cruasan, pechivo, sandvich]

    return (
        <Layout>
            <div className="row row-cols-md-1 justify-content-center my-3">
                <div className="col">

                    <Carousel images={images}/>
                    <div className="container my-2 ">
                        <h4>Ми поважаємо хліб!</h4>
                        <p>
                            Ми пропонуємо онлайн-сервіс із замовлення та доставки <b>круасанів</b>, <b>сендвічів</b>, <b>печива та хліба</b>.
                            Вся випічка створюється нашими пекарями і кондитерами на сучасному хлібоперкарському обладнанні з дотриманням найвищих вимог до якості.
                        </p>

                    </div>
                    <div className="container my-2 d-flex justify-content-center">
                        <img src={production} style={{height: "20vh"}}/>
                    </div>


                </div>
            </div>

        </Layout>
    );


}

export default LandingPage;