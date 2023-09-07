export const fetchAPI = () => {
  const result = [];

  for (let i = 17; i <= 23; i++) {
    result.push(i + ":00");
  }

  return result;
};

export const submitAPI = (formData) => {
  if (formData) return true;
  return false;
};
