import {useRef} from "react";


function SearchBar({callback}){
    const search = useRef("");
    const handleSearch = () => callback(search.current.value);

    return ( <div className="d-flex my-1 my-sm-0">
                <input ref={search} onKeyUp={handleSearch} className="form-control py-1 mr-sm-2 rounded-0 rounded-start" type="search" placeholder="Пошук" aria-label="Search"/>
                <button onClick={handleSearch} className="btn btn-outline-success py-1 my-sm-0 rounded-0 rounded-end" type="button">
                    Пошук
                </button>
            </div>
    )

}


export default SearchBar;