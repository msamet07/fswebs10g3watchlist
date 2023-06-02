export const ADD_FAVLIST = "ADD_FAVLIST";
export const REMOVE_FAVLIST = "REMOVE_FAVLIST";
export const ONCEKI_SIRA = "ONCEKI_SIRA";
export const SONRAKI_SIRA = "SONRAKI_SIRA";
export const BASA_DON = "BASA_DON";

export const addFavlist = (movie) => {
  return {
    type: ADD_FAVLIST,
    payload: movie,
  };
};

export const removeFavlist = (id) => {
  return {
    type: REMOVE_FAVLIST,
    payload: id,
  };
};
export const sonrakiSira = () => {
  return {
    type: SONRAKI_SIRA,
  };
};
export const oncekiSira = () => {
  return {
    type: ONCEKI_SIRA,
  };
};
export const basaDon = () => {
  return {
    type: BASA_DON,
  };
};
