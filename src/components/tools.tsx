const fetchPuppyById = async (id: number) => {
  const response = await fetch(`http://localhost:3002/api/puppies/${id}`);
  const puppy = await response.json();
  return puppy;
};

const fetchPuppyPhotoByBreed = async (breed: string) => {
  return null;
};

export { fetchPuppyById, fetchPuppyPhotoByBreed }