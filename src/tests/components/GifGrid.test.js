import React from "react";
import {shallow} from "enzyme";
import {GifGrid} from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs")

describe("Testing the <GifGrid", () => {

    const category = 'Dragon Ball';

    test("should show successfully", () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show items when loaded images useFetchGifs', () => {
        const gifs  = [{
          id: 'abc',
          url: 'https://localhost/some.jpg',
          title: 'dragon Ball'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={ category }/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    });

})