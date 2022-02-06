import {useFetchGifs} from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";


describe("Testing useFetchGifs hooks", () => {

    test("should returned init state", async () => {
        let category = 'Dragon Ball';
        const { result, waitForNextUpdate} = renderHook( () => useFetchGifs(category));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data.length).toBe(0);
        expect(data).toEqual([]);
        expect(loading).toBeTruthy()
    });

    test("should return images list and loading false",  async () => {
        let category = 'Dragon Ball';

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category));

        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).not.toBeTruthy()
    })
})