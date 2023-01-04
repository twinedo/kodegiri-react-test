import {createSlice} from '@reduxjs/toolkit';
import { IListPhotos } from 'services/models/photo_list_model';

export interface UserProps {
  name: string;
  username: string;
  profile_image: string;
}

export interface PhotoState {
  description: string;
  urls: string;
  user: UserProps;
  likes: number;
  alt_description: string;
}

const initialState: IListPhotos = {
  description: '',
  urls: {
    raw: '',
    full: '',
    thumb: '',
    regular: '',
    small: '',
    small_s3: '',
  },
  user: {
    name: '',
    username: '',
    profile_image: {small: '', large: '', medium: ''},
  },
  likes: 0,
  alt_description: null,
};

export const photoReducer = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    reducerPhoto: (state, action) => {
      state = action.payload;
    },
  },
});

export const {reducerPhoto} = photoReducer.actions;

export default photoReducer.reducer;
