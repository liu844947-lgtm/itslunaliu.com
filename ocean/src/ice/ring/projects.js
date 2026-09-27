// Twelve source planes keep the continuous arc; five user project destinations.
const DESTINATION_COUNT = 5;
export const PROJECTS = Array.from({ length: 12 }, (_, index) => ({
  file: null, name: '', type: '', year: '', project: index % DESTINATION_COUNT,
}));
export const FOCUS = Array.from({ length: DESTINATION_COUNT }, (_, index) => index);
export const PER_FINISH = DESTINATION_COUNT;
export const IMAGE_FILES = PROJECTS.map(() => null);
