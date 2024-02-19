import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputOptService {
  init2DArray(size: number): string[][] {
    return new Array<string[]>(size).fill(new Array<string>());
  }

  toArray(value: string | string[]): string[] {
    return Array.isArray(value) ? value : [value];
  }

  addItemToAll(source: string[][], items: string[]): string[][] {
    return source.map((entry) => entry.concat(items));
  }

  removeItemFromAll(source: string[][], items: string[]): string[][] {
    return source.map((entry) => entry?.length ? entry.filter((item) => !items.includes(item)) : []);
  }

  addItemAtIndex(
    source: string[][],
    index: number,
    items: string[]
  ): string[][] {
    source[index] = source[index] ? source[index].concat(items) : source[index];
    return source;
  }

  removeItemAtIndex(
    source: string[][],
    index: number,
    items: string[]
  ): string[][] {
    source[index] = source[index] ? source[index].filter((item) => !items.includes(item)) : source[index];
    return source;
  }
}
