import queryString from 'query-string';

export const queryParams = params => {
  return queryString.parse(params);
};
