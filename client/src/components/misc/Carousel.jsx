


function Carousel({images}){
    return (
            <div id="carouselExampleCaptions" className="carousel slide container-sm d-none d-sm-flex"  data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    {images.map((imageUrl, index)=>{
                        const cc = index === 0 ? "active": "";
                        return (
                            <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={cc} aria-current="true" aria-label={`Slide ${index}`}></button>
                        )
                    })}

                </div>
                <div className="carousel-inner">
                    {images.map((imageUrl, index)=>{
                        const cc = index === 0 ? "carousel-item active": "carousel-item"
                        return (<div key={index} className={cc} >
                                <img src={imageUrl} className="d-block w-100 rounded img-fluid "   style={{height: "30rem"}}/>

                            </div>
                        )})}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

    );
}

export default Carousel;