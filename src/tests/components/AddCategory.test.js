import React from "react";
import {shallow} from "enzyme";
import {AddCategory} from "../../components/AddCategory";


describe('Testing the <AddCategory', () => {

    const setCategories = jest.fn()
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories} />);
    })

    test("should show successfully", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should change the input text", () => {
        const input = wrapper.find('input');
        const value = 'Hello world';
        input.simulate('change', {target: { value }});

        expect(input.prop('value')).toBe("");
    });

    test("should not send submit", () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect( setCategories ).not.toHaveBeenCalled()
    });

    test("should called setCategories and clean input text", () => {
        //1. Simular el inputChange
        let input = wrapper.find('input');
        const value = "Drago Ball";
        input.simulate('change', { target: { value }});
        //2. Simular el submit
        wrapper.find('form').simulate('submit', {
            preventDefault() {}
        })
        //3. seCategories llamado 1 vez
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function));
        //4. el valor de input debe estar vacio
        expect(input.prop("value")).toBe("");
    });

})