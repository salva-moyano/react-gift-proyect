import {getGifs} from "../../helpers/getGifs";

describe("Testing helper getGifs fetch", () => {

    test("should bring 10 elements", async () => {
        const gifs = await getGifs('one Punch');
        expect( gifs.length ).toBe(10);
    });

    test("should bring 0 elements", async () => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);
    });


});