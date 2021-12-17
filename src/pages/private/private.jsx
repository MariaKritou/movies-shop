import Layout from "../../components/layout/layout";
import React, { Children } from 'react';
import meme1 from '../../assets/meme1.jpg';
import meme2 from '../../assets/meme2.jpg';
import './private.styles.css';

export const Private = () => {

    return (
        <Layout children={Children}>
            <div className="container text-white" align="center">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <img src={meme1} alt="meme1" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                    <img src={meme2} alt="meme2" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}