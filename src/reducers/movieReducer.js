import { movies } from "../movies";
import {
  ADD_FAVLIST,
  BASA_DON,
  ONCEKI_SIRA,
  REMOVE_FAVLIST,
  SONRAKI_SIRA,
} from "../actions/movieActions";

const initialState = {
  movies: movies,
  favList: [],
  sira: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ONCEKI_SIRA:
      return {
        ...state,
        sira: state.sira - 1,
      };
    case SONRAKI_SIRA:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case BASA_DON:
      return {
        ...state,
        sira: initialState.sira,
      };
    case ADD_FAVLIST:
      return {
        ...state,
        favList: [...state.favList, action.payload],
        sira: state.sira === 0 ? 0 : state.sira - 1,
        movies: state.movies.filter((mov) => action.payload !== mov),
      };
    case REMOVE_FAVLIST:
      let removedMov = state.favList.find((mov) => mov.id === action.payload);
      return {
        ...state,
        movies: [removedMov, ...state.movies],
        favList: state.favList.filter((mov) => mov !== removedMov),
      };
    default:
      return state;
  }
};

export default reducer;
