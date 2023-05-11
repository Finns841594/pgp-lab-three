import { Puppy } from './types';

const UnsplashAccessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY || '';
const backendDomain = process.env.REACT_APP_BACKEND_DOMAIN || '';

const fetchPuppyById = async (id: number): Promise<Puppy> => {
  const response = await fetch(`${backendDomain}/api/puppies/${id}`);
  const puppy = await response.json();
  return puppy;
};

const fetchAllPuppies = async (): Promise<Puppy[]> => {
  const response = await fetch(`${backendDomain}/api/puppies`);
  const puppies = await response.json();
  return puppies;
};

const fetchPuppyPhotoByBreed = async (breed: string): Promise<string | null> => {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${breed}+dog&client_id=${UnsplashAccessKey}`);
    const data = await response.json();
    return data.results[0].urls.small;
  } catch (error) {
    return null;
  }
};

export { fetchPuppyById, fetchPuppyPhotoByBreed, fetchAllPuppies }