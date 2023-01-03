import apiClient from 'services/helpers/apiClient';
import {IListPhotos, ISearchPhotos} from 'services/models/photo_list_model';

async function getListPhotos(page: number) {
  const res = await apiClient.get<IListPhotos>('/photos', {
    params: {
      page: page,
    },
  });
  return res.data;
}

async function searchPhotoByKeyword(query: string, page: number) {
  const res = await apiClient.get<ISearchPhotos>('search/photos', {
    params: {
      query: query,
      page: page,
    },
  });
  return res.data.results;
}

export {getListPhotos, searchPhotoByKeyword};
