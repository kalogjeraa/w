export const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index)
];

export const formatStringBy = (type, object) => {
  const keys = Object.keys(object);
  const values = Object.values(object);

  let str = `{{ cite ${type} \n`;
  for (let i = 0; i < keys.length; i++) {
    str += `  | ${keys[i]} = ${values[i]} \n`;
  }

  return str += `}}`;
}