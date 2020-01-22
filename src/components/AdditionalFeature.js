import React from 'react';
import {connect} from "react-redux";
import {addFeature} from "../actions/featureActions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature.name,props.feature.price)}  className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
    return {
        features: state.featureReducer.features
    };
};

export default connect(
    mapStateToProps,
    {addFeature}
)(AdditionalFeature)
