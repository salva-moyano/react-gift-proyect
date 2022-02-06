import React from "react";
import {shallow} from "enzyme";
import {GifGridItem} from "../../components/GifGridItem";

describe('Testing the <GifGridItem', () => {

    const title = 'title';
    const url = "https://localhost/some.jpg";
    const wrapper = shallow(<GifGridItem url={ url } title={ title }/>);

    test("should show successfully", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should have a text with title", () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title);
    });

    test("should have a img equal to url and alt the props", () => {
        const img = wrapper.find('img');

        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title)
    });

    test("should have a div the class animated_fadeIn", () => {
        const div = wrapper.find("div");
        const className = div.prop("className")
        expect(className.includes('animate_fadeIn')).toBe( false );
    })
});