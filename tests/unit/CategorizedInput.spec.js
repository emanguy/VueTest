import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CategorizedInput from '@/components/CategorizedInput';
import { NewListItem } from '@/components/CategorizedInput';

describe('CategorizedInput.vue', () => {
    it("fails on missing topic", () => {
        const wrapper = shallowMount(CategorizedInput, {
            propsData: {
                availableTypes: [ "Fruit", "Vegetable" ]
            }
        });

        wrapper.find("form").trigger('submit');

        expect(wrapper.vm.errorMsg).to.not.be.empty;
    });

    it("fails on missing entry", () => {
        const wrapper = shallowMount(CategorizedInput, {
            propsData: {
                availableTypes: [ "Fruit", "Vegetable" ]
            }
        });
        wrapper.setData({selectedType: "Fruit"});

        wrapper.find("form").trigger('submit');

        expect(wrapper.vm.errorMsg).to.not.be.empty;
    });

    it("fires an event when the appropriate data is filled", () => {
        const wrapper = shallowMount(CategorizedInput, {
            propsData: {
                availableTypes: [ "Fruit", "Vegetable" ]
            }
        });
        wrapper.setData({selectedType: "Fruit", nameValue: "Banana"});

        wrapper.find("form").trigger('submit');

        expect(wrapper.emitted()).to.have.property("item-add");
        expect(wrapper.emitted()["item-add"][0][0]).to.deep.equal(new NewListItem("Banana", "Fruit"));
    });
});