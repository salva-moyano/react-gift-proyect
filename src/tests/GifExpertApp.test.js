import React from "react";
import {shallow} from "enzyme";
import {GifExpertApp} from "../GifExpertApp";

describe("Testing <GifExpertApp", () => {

    test("should show successfully", () => {
        const wrapper = shallow(<GifExpertApp/>);

        expect(wrapper).toMatchSnapshot();
    });

    test("should show a list categories", () => {
        const categories  = ['Dragon Ball', 'Oliver y Benji'];

        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })



});