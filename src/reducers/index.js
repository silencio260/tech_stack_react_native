import {combineReducers} from 'redux'
import LibraryReducers from './LibraryReducers'
import SelectReducer from './SelectReducer'

export default combineReducers ({
    libraries: LibraryReducers,
    selectedLibraryId: SelectReducer
})

