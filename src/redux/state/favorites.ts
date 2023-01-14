import { localStorageTypes, Person } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice, current } from '@reduxjs/toolkit';

const initialState: Person[] = [];
const localStorageData = getLocalStorage(localStorageTypes.FAVORITES)
  ? JSON.parse(getLocalStorage(localStorageTypes.FAVORITES) as string)
  : initialState;

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: localStorageData,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(localStorageTypes.FAVORITES, action.payload);
      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter(
        (p: Person) => p.id !== action.payload.id
      );
      setLocalStorage(localStorageTypes.FAVORITES, filteredState);

      return filteredState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
