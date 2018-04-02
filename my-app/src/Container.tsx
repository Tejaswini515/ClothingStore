import { connect } from 'react-redux';
import SubmitComponent from './SubmitComponent';

var submitAction = { type: 'SUBMIT'};

function mapStateToProps(state) {
  return {
    newValue : {...state}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitFun: function() {
      return dispatch(submitAction);
    }
  };
}

var CombinedContainer = connect ( mapStateToProps, mapDispatchToProps) (SubmitComponent);

export default CombinedContainer;
