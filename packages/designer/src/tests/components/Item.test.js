import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Item from '../../components/Item';
import * as Models from '@art-forms/models';

describe("render Item component", () => {
    const itemFactory = new Models.ItemFactory();
    it("empty input", () => {
        const item = mount(<Item item={itemFactory.createItem({})} />);
        expect(item.find('textarea').text()).toEqual('');
    })
    it("initial text appeared", () => {
        const text = 'bla';
        const item = mount(<Item item={itemFactory.createItem({ text })} />);
        expect(item.find('textarea').text()).toEqual(text);
    })
})