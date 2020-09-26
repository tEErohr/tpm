import * as qs from 'querystring'
import { ApiQueryParams } from "../../../lib/registry/query";

describe('ApiQueryParams', function () {
  const TEXT_FIXTURE = "@types/cuid";
  describe(`with text`, () => {
    const params = new ApiQueryParams(TEXT_FIXTURE);
    test("renders text param only", function () {
      expect(params.toString()).toEqual(`text=${qs.escape(TEXT_FIXTURE)}`);
    });
  });
  describe(`with text and size`, () => {
    const params = new ApiQueryParams(TEXT_FIXTURE);
    params.set('size', 20)
    test("renders all params", function () {
      expect(params.toString()).toEqual(`text=${qs.escape(TEXT_FIXTURE)}&size=20`);
    });
  });
});
