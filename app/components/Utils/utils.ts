// not perfect since if string starts with number NOT good.
export const isNumberCatto = (value?: string | number): boolean => {
  console.log('inside check for number value===', value);
  return value != null && value !== '' && !isNaN(Number(value.toString()));
};
