export const getName = () => fetch('/api/name').then((res) => res.json());
