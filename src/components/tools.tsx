import { Puppy } from './types';

const UnsplashAccessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY || '';
const backendDomain = process.env.REACT_APP_BACKEND_DOMAIN || '';

export const fetchPuppyById = async (id: number): Promise<Puppy> => {
  const response = await fetch(`${backendDomain}/api/puppies/${id}`);
  const puppy = await response.json();
  return puppy;
};

export const fetchAllPuppies = async (): Promise<Puppy[]> => {
  const response = await fetch(`${backendDomain}/api/puppies`);
  const puppies = await response.json();
  return puppies;
};

export const fetchPuppyPhotoByBreed = async (breed: string): Promise<string | null> => {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${breed}+puppy&client_id=${UnsplashAccessKey}`);
    const data = await response.json();
    return data.results[0].urls.small;
  } catch (error) {
    return null;
  }
};

interface AddPuppy {
  breed: string;
  name: string;
  birthdate: string;
}

export const addPuppy = async (puppy: AddPuppy): Promise<Puppy> => {
  const response = await fetch(`${backendDomain}/api/puppies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(puppy),
  });
  const newPuppy = await response.json();
  return newPuppy;
};

export const updatePuppyInfo = async (puppyInfo: Puppy): Promise<Puppy> => {
  const response = await fetch(`${backendDomain}/api/puppies/${puppyInfo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(puppyInfo),
    });
    const updatedPuppy = await response.json();
    console.log('😎 updatedPuppy: ', updatedPuppy);
    return updatedPuppy;
}

export const deletePuppy = async (id: number): Promise<void> => {
  await fetch(`${backendDomain}/api/puppies/${id}`, {
    method: 'DELETE',
  });
}