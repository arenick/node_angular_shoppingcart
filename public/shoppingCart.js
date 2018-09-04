"use strict";

const shoppingCart = {
    template:`
    <h1>Shopping Cart<h1>
    <form class="form">
    <section class = "input">
    <input ng-model = "$ctrl.newItem.product" placeholder = "Product"></input>
    <input ng-model = "$ctrl.newItem.price" placeholder = "Price"></input>
    <input ng-model = "$ctrl.newItem.quantity" placeholder = "Quantity"></input>
    <button ng-click = "$ctrl.addItem($ctrl.newItem)">Add Item</button>
    </section>
    </form>

    <section class = "cart">
    <secion class = "list-items" ng-repeat = "cartItems in $ctrl.shoppingList | orderBy: 'id' ">
    <section class = "items">
    <p>Products: {{cartItems.products}}</p>
    <p>Price: {{cartItems.price | currency}}</p>
    <p>Quantity: {{cartItems.quantity}}</p>
    <button ng-click = "$ctrl.removeItems(cartItems.id)">X</button>
    <button ng-click = "$ctrl.updateItems(cartItems.id, $ctrl.newItem.quantity)">Update Quantity</button>
    </section>
    </section>
    `,
    controller: ['shoppingCartService', function(shoppingCartService){
        const vm = this;

        vm.getAllItems = () => {
        shoppingCartService.getAllItems().then((response) => {
            vm.shoppingList = response;
        });
    }
        vm.addItems = (item) => {
        shoppingCartService.addItems(item).then((response) => {
            vm.shoppingList = response;
        })
    }
        vm.updateItems = (id, quantity) => {
        vm.updateItems.updateItems(id, quantity).then((response) => {
            vm.shoppingList = response;
        });
    }
        vm.removeItems = (item) => {  
        vm.removeItems.deleteItems(item).then((response) => {
            vm.shoppingList = response;
        });
    }
    }]
}

angular
    .module("App")
    .component("shoppingCart", shoppingCart);