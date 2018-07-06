<template>
    <div>
        <form @submit.prevent="doSubmit">
            <h4>Type:</h4>
            <template v-for="(type, index) in availableTypes">
                <input type="radio" v-model="selectedType" :id="'item' + index" :key="'item' + type" name="typeOption" :value="type"/>
                <label :for="'item' + index" :key="'itemLabel' + index">{{ type }}</label>
            </template>

            <h4>Name:</h4>
            <input v-model="nameValue" type="text" placeholder="Item name..." />
            <input type="submit" value="Add item!" />
        </form>

        <p class="error" v-show="errorMsg">{{ errorMsg }}</p>
    </div>
</template>

<script>
    export class NewListItem {
        constructor(name = "~No name~", type = "~No type~") {
            this.name = name;
            this.type = type;
        }
    }

    export default {
        name: "CategorizedInput",
        props: {
            availableTypes: { type: Array, required: true }
        },
        data: function() {
            return {
                selectedType: "",
                nameValue: "",
                errorMsg: ""
            }
        },
        methods: {
            doSubmit() {
                if (this.selectedType && this.nameValue) {
                    this.$emit('item-add', new NewListItem(this.nameValue, this.selectedType));
                }
                else {
                    if (!this.selectedType) {
                        this.errorMsg = "You forgot to select a type!";
                    }
                    else if (!this.nameValue) {
                        this.errorMsg = "You didn't enter a name!";
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .error {
        color: red;
    }
</style>