let initialState = [{name: 'shoulder', value: 13 }, {name: 'height', value: 15 }];

function measurements (state = initialState, action) {

    console.log('Inside measurements');

    if (action.type === 'SUBMIT') {
      let newState = state.map(a => {
          var returnVal = {...a};

          switch ( returnVal.name ) {
            case 'shoulder':  returnVal.value = 17; break;
            case 'height':    returnVal.value = 20; break;
            default:          returnVal.value = a.value;
          }
          return returnVal;
      });
      return newState;
    } else {
      return state;
    }
  }

export default measurements;
