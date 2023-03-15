import React,{useState} from "react";
import { Container , Row, Col} from "reactstrap";
import CommonSection from './../shared/CommonSection';
import { useLocation } from "react-router-dom";
import TourCard from './../shared/TourCard';
import '../styles/searchresultlist.css';


const SearchResultList = () => {

    const location = useLocation();
    const [data] =useState(location.state);
    

    return (
        <>
            <CommonSection title={'Available Tours'}/>
            <section className="searchresult">
                <Container>
                    <Row>
                        {
                            data.length===0 ? (
                                <h4 className="text-center">No tour Found</h4>
                            ):(
                                data?.map(tour =>(
                                    <Col lg="3" className="mb-4" key={tour._id}>
                                        <TourCard tour={tour}/>
                                    </Col>
                                ))
                            )
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};
 
export default SearchResultList;