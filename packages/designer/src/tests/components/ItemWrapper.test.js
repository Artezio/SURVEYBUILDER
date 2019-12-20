import * as React from 'react';
import * as Models from '@artezio/models';
import ItemWrapper from '../../../src/components/ItemWrapper';
import { mount } from 'enzyme';

describe("ItemWrapper", () => {
    const itemFactory = new Models.ItemFactory();
    it("menu appear in groupItem", () => {
        const itemWrapper = mount(<ItemWrapper item={itemFactory.createGroupItem()} nestingLevel={'1'} />);
        expect(itemWrapper.find('ItemCollectionMenu').length).toBe(1);
    })
})