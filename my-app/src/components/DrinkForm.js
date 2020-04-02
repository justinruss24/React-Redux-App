import React from 'react';
import { connect } from "react-redux";

import { getData } from "../actions/actions";

const DrinkForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };

    return (
            <div>
                {props.isFetchingData ? (
                    <div>Making your drink...</div>
                ) : (
                    <div>
                        <p>Drink Count: {props.count} </p>
                        <button onClick={handleGetData}>Surprise Me!</button>
                    </div>
                    )}
            </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData,
        count: state.count
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(DrinkForm);