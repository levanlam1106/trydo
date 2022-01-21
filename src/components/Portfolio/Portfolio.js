import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../../assets/style/Portfolio.css";
import { Datas } from "./Data";

function Portfolio() {
    const [active,setActive] = useState(0)
  
    const Data = Datas.slice(active,active+3)
    
    return (
        <>
            <div className="portfolio">
                <h1 className="title">Our Portfolio</h1>
                <p className="description">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                </p>
                <div className="slider">
                    {Data.map((data, index) => {
                        return (
                            <>
                                <div className="slider-portfolio">
                                    <div className="thumbnail-inner">
                                        <div className={data.image}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>Development</p>
                                            <Link to="/">
                                                Getting tickets to the big show{" "}
                                            </Link>
                                        </div>
                                        <Link className="case" to="/">
                                            CASE STUDY
                                        </Link>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
            <div className="slick-list">
                <ul className="slick-dots">
                    <li className={active ===0 ? "slick-active" : ""}><button onClick={() => setActive(0)}></button></li>
                    <li className={active ===1 ? "slick-active" : ""}><button onClick={() => setActive(1)}></button></li>
                    <li className={active ===2 ? "slick-active" : ""}><button onClick={() => setActive(2)}></button></li>
                    <li className={active ===3 ? "slick-active" : ""}><button onClick={() => setActive(3)}></button></li>
                    <li className={active ===4 ? "slick-active" : ""}><button onClick={() => setActive(4)}></button></li>
                    <li className={active ===5 ? "slick-active" : ""}><button onClick={() => setActive(5)}></button></li>
                </ul>
            </div>
        </>
    );
}

export default Portfolio;
