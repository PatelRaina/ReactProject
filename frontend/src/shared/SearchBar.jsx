import React,{useRef} from "react";
import './search-bar.css'
import {Col, Form, FormGroup} from "reactstrap";
import {BASE_URL} from './../utils/config';
import {useNavigate} from 'react-router-dom';


const SearchBar = () => {
    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate();

    const searchHandler = async() =>{
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location==='' || distance==='' || maxGroupSize==='' ){
            return alert('All fields are requiured!');
        }

        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);

        if(!res.ok) alert('Something went wrong')
        const result = await res.json()

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
         {state: result.data});
    };


    return <>
        <div className="search__bar">
            <Form className=" align-items-center gap-4">
                {/* <FormGroup className="d-flex gap-3 form__group form__group-fast">*/}
                   
                    <span>
                    <i className="ri-map-pin-line"></i>
                    <br/>
                    <div>
                        <h3>Location</h3>
                        <input type="text" placeholder="Enter your Location" ref={locationRef}/>
                    </div>
                    </span>
                    <br/>
                {/* </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-fast"> */}
                    <span>
                    <i className="ri-map-pin-time-line"></i>
                    <div>
                        <h3>Distance</h3>
                        <input type="number" placeholder="Distance k/m" ref={distanceRef}/>
                    </div>
                    </span>
                    <br/>
                {/* </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-last"> */}
                    <span>
                    <i className="ri-group-line"></i>
                    <div>
                        <h3>Max People</h3>
                        <input type="number" placeholder="0" ref={maxGroupSizeRef}/>
                    </div><br/>
                    </span>
                {/* </FormGroup> */}
                <span className="search__icon" type='submit' onClick={searchHandler}>
                <i className="ri-search-line"></i>
                </span>
            </Form>
        </div>
    
    </>
};
 
export default SearchBar;