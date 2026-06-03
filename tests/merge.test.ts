import { merge } from '../src/merge';

describe('merge function', () => {
  it('should merge three collections according to the rules', () => {
    const col1 = [1, 3, 5];
    const col2 = [6, 4, 2]; // เรียงจากมากไปน้อย
    const col3 = [7, 8, 9];
    
    const result = merge(col1, col2, col3);
    
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should handle empty collections', () => {
    const col1: number[] = [];
    const col2 = [3, 2, 1];
    const col3: number[] = [];
    
    const result = merge(col1, col2, col3);
    
    expect(result).toEqual([1, 2, 3]);
  });

  it('should handle collections of different lengths', () => {
    const col1 = [10, 20];
    const col2 = [30];
    const col3 = [5, 15, 25];
    
    const result = merge(col1, col2, col3);
    
    expect(result).toEqual([5, 10, 15, 20, 25, 30]);
  });

  it('should handle duplicate values', () => {
    const col1 = [1, 5, 5];
    const col2 = [5, 2, 1];
    const col3 = [1, 5];
    
    const result = merge(col1, col2, col3);
    
    expect(result).toEqual([1, 1, 1, 2, 5, 5, 5, 5]);
  });

  it('should handle all empty collections', () => {
    expect(merge([], [], [])).toEqual([]);
  });
});
