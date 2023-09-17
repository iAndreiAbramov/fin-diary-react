import { GetRoute } from './get-route';

describe('GetRoute', function () {
  it('should return a correct route', function () {
    expect(GetRoute.Home()).toBe('/');
    expect(GetRoute.Dashboard()).toBe('/dashboard');
  });
});
