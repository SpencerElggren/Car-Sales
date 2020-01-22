import React from 'react';
import {connect} from "react-redux";
import { removeFeature } from "../actions/featureActions";

const AddedFeature = props => {

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.addFeature(props.feature.name,props.feature.price)} className="button">X</button>
        {props.features.name} (-{props.features.price})
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
    {removeFeature}
)(AddedFeature)

