import { TestBed } from '@angular/core/testing';
import { getNextDayPrice } from './utils';
fdescribe('測試隔日價格', () => {

  it('今日收盤10, 隔日漲停價格10', () => {
    expect(getNextDayPrice(10, 1.1)).toBe(11);
  });
  it('今日收盤10, 隔日跌停價格9', () => {
    expect(getNextDayPrice(10, 0.9)).toBe(9);
  });
  it('今日收盤79, 隔日漲停價格84.4', () => {
    expect(getNextDayPrice(76.8, 1.1)).toBe(84.4);
  });
  it('今日收盤79, 隔日跌停價格69.2', () => {
    expect(getNextDayPrice(76.8, 0.9)).toBe(69.2);
  });
  it('今日收盤305.5, 隔日漲停價格336', () => {
    expect(getNextDayPrice(305.5, 1.1)).toBe(336);
  });
  it('今日收盤305.5, 隔日跌停價格275', () => {
    expect(getNextDayPrice(305.5, 0.9)).toBe(275);
  });
  it('今日收盤1080, 隔日漲停價格1185', () => {
    expect(getNextDayPrice(1080, 1.1)).toBe(1185);
  });
  it('今日收盤1080, 隔日跌停價格972', () => {
    expect(getNextDayPrice(1080, 0.9)).toBe(972);
  });
});
