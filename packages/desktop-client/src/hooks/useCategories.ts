import { useDispatch, useSelector } from 'react-redux';

import { getCategories } from 'loot-core/client/actions';

export function useCategories() {
  const dispatch = useDispatch();
  const categoriesLoaded = useSelector(state => state.queries.categoriesLoaded);

  if (!categoriesLoaded) {
    dispatch(getCategories());
  }

  return useSelector(state => state.queries.categories);
}
