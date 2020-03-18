const initialState = { tab: 'articles', articles: [], groups: [], errors: '' };

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SAVED_GROUP':
      return {
        ...state,
        groups: action.payload
      };
    case 'FETCH_ARTICLES':
        return {
            ...state,
            articles: action.payload
        };
    case 'TAB_CHANGE':
        return {
            ...state,
            tab: action.payload.tab
        };
    case 'ERROR':
        return {
            ...state,
            errors: action.payload.errors
        };
    default:
      return state;
  }
}
