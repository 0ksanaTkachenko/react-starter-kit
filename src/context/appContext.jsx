import { createContext, useContext, useReducer } from 'react';

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    // Пример:
    // case 'TOGGLE_MODAL':
    //   return { ...state, isModalOpen: !state.isModalOpen };

    default:
      return state;
  }
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
