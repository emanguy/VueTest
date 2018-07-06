<template>
   <div>
       <template v-for="category in categories">
           <h2 :key="'cat' + category.categoryType">Entries under: {{ category.categoryType }}</h2>
           <ul :key="'catList' + category.categoryType">
               <!-- eslint-disable-next-line-->
               <li v-for="(itemName, index) in category.items">
                   {{ itemName }}
                   <button @click="removeItem(category, index)">Remove item</button>
               </li>
           </ul>
       </template>
   </div>
</template>

<script>
    class Category {
        constructor(categoryType, items = []) {
            this.categoryType = categoryType;
            this.items = items;
        }
    }

    export default {
        name: "CategorizedOutput",
        data: function() {
            return {
                categories: []
            };
        },
        created: function() {
            this._knownCategories = new Map();
        },
        methods: {
            addItem(item) {
                if (!this._knownCategories.has(item.type)) {
                    let category = new Category(item.type, [ item.name ]);
                    this._knownCategories.set(item.type, category);
                    this.categories.push(category);
                }
                else {
                    this._knownCategories.get(item.type).items.push(item.name);
                }
            },
            removeItem(category, index) {
                if (category.items.length > index) {
                    category.items.splice(index, 1);
                }
            }
        }
    }
</script>

<style scoped>
    h2 {
        text-align: left;
    }

    ul {
        text-align: left;
    }
</style>