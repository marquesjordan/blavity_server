import axios from 'axios';

export const fetchSavedArticles = () => async dispatch => {
    try {
        const res = await axios.get('/api/groups');

        dispatch({ type: 'SAVED_GROUP', payload: res.data});
    } catch (error) {
        dispatch({ type: 'ERROR', payload: {errors: 'Fetching Saved Data Error.'}});
    }
}

export const fetchNewsArticles = () => async dispatch => {
    try {
        const res = await axios.get('http://newsapi.org/v2/everything?q=bitcoin&apiKey=c8840f169ec844549128b2271e4674d3');
        console.log(res.data.articles)
        dispatch({ type: 'FETCH_ARTICLES', payload: res.data.articles});

    } catch (error) {
        console.log('error ')
        dispatch({ type: 'ERROR', payload: {errors: 'Fetching Articles From API Error.'}});
    }
}

export const changeTab = (tab) => async dispatch => {
    console.log('CHANGE TAB')
    dispatch({type: 'TAB_CHANGE', payload: {tab: tab}})
}