import React from "react";
import { connect } from "react-redux";
import "../App.css";

const Drinks = props => {
    return (
        <>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                    props.drink.map(drinks => 
                        <div className="drink">
                            <img src={drinks.strDrinkThumb} alt={drinks.strDrink} />
                            <h2>{drinks.strDrink}</h2>
                            <h4><span className="how">Base Liquor</span>: {drinks.strIngredient1}</h4>
                            <p><span className="how">How it's Made</span>: {drinks.strInstructions}</p>
                        </div>)
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        drink: state.drink,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {}
)(Drinks);