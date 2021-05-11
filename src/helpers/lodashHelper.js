export function isEmpty(object) {
  if (!object) {
    return true;
  }

  return Object.keys(object).length === 0;
}

export function isEmptyArray(array) {
  return array.length === 0;
}

export function chunk(array, itemsCount) {
  let newArray = [],
    startIndex = 0;
  const arrayLength = array.length;

  while (startIndex < arrayLength) {
    newArray.push(array.slice(startIndex, startIndex + itemsCount));
    startIndex += itemsCount;
  }

  return newArray;
}

export function isEquivalentObjects(a, b) {
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}

export function uniqBy(array, func) {
  if (array.length === 0) {
    return array;
  }
  let uniqValuesArray = [],
    arrayWithUniqValues = [];

  array.forEach((item, index) => {
    let object = { index: index };
    object.uniq = func(item);
    uniqValuesArray.push(object);
  });

  array.forEach((item, index) => {
    item.uniq = uniqValuesArray[index].uniq;
    arrayWithUniqValues.push(item);
  });

  return arrayWithUniqValues.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj['uniq']).indexOf(obj['uniq']) === pos;
  });
}

export const isNull = object => {
  return object === null;
};
