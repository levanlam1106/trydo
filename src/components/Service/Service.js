import React from "react";
import { datas } from "./Datas";
import { Link } from "react-router-dom";
import "../../assets/style/Service.css";

function Service() {
    return (
        <>
            <div className="service">
                <div className="container">
                    {datas.map((data) => {
                        return (
                            <>
                                <div className="service-row">
                                    <Link to={data.links}>
                                        <div className="service-jobs">
                                            <div className="icons">
                                                {data.icon}
                                            </div>
                                            <div className="content">
                                                <h2>{data.title}</h2>
                                                <p>{data.p}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Service;
