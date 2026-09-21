// Twelve source planes keep the continuous arc; five user project destinations.
export const PROJECTS = Array.from({ length: 12 }, (_, index) => ({
  file: null, name: '', type: '', year: '', project: index % 5,
}));
export const FOCUS = [0, 1, 2, 3, 4];
export const PER_FINISH = 5;
export const IMAGE_FILES = PROJECTS.map(() => null);
