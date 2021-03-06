import { getAllData } from '../lib/icons';
import { renderHook } from '@testing-library/react-hooks';
import useSearch from '../lib/search';

describe('Icon Overview', () => {
  it('can search filter icons', async () => {
    let allData = getAllData();

    const { result: result1, waitForNextUpdate: wait1 } = renderHook(() => useSearch(allData, ''));
    expect(result1.current).toHaveLength(allData.length);

    const { result: result2, waitForNextUpdate: wait2 } = renderHook(() =>
      useSearch(allData, 'airplay')
    );
    await wait2();
    expect(result2.current).toHaveLength(2);
  });
});
