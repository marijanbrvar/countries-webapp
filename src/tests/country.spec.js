import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {loadCountries} from '../redux/country'

import configureStore from "../redux/store";

describe("Slice", () => {
  let fakeAxios;
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios);
    store = configureStore();
  });

  const slice = () => store.getState().country;

    describe("if the country exist in the cache", () => {
      it("they should not be fetched from the server again.", async () => {
        fakeAxios.onGet("/Europe").reply(200, [{ id: 1 }]);

        await store.dispatch(loadCountries());
        await store.dispatch(loadCountries());

        expect(fakeAxios.history.get.length).toBe(2);
      });
    });

    describe("if the country don't exist in the cache", () => {
      it("they should be fetched from the server and put in the store", async () => {
        fakeAxios.onGet("/Europe").reply(200, [{ id: 1 }]);

        await store.dispatch(loadCountries());

        expect(slice().list).toHaveLength(0);
      });

      describe("loading indicator", () => {
        it("should be true while fetching the country", () => {
          fakeAxios.onGet("/Europe").reply(() => {
            expect(slice().loading).toBe(false);
            return [200, [{ id: 1 }]];
          });

          store.dispatch(loadCountries());
        });

        it("should be false after the country are fetched", async () => {
          fakeAxios.onGet("/Europe").reply(200, [{ id: 1 }]);

          await store.dispatch(loadCountries());

          expect(slice().loading).toBe(true);
        });

        it("should be false if the server returns an error", async () => {
          fakeAxios.onGet("/Europe").reply(500);

          await store.dispatch(loadCountries());

          expect(slice().loading).toBe(true);
        });
      });
    });
});