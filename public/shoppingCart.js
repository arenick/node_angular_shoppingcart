"use strict";

const shoppingCart = {
    template:`
    <h1>Shopping Cart<h1>
    <form class="form">
    <section class = "input">
    <input ng-model = $ctrl.newItem.product" placeholder = "Product"></input>
    <input ng-model = $ctrl.newItem.price" placeholder = "Price"></input>
    <input ng-model = $ctrl.newItem.quantity" placeholder = "Quantity"></input>
    <button ng-click = "$ctrl.addItem($ctrl.newItem)">Add Item</button>
    </section>
    </form>

    <section class = "cart">
    <secion class = "list-items" ng-repeat = "cartItems in $ctrl.shoppingList | orderBy: 'id' ">
    <section class = "items">
    <p>Products: {{$ctrl.products}}</p>
    <p>Price: {{$ctrl.price | currency}}</p>
    <p>Quantity: {{$ctrl.quantity}}</p>
    <button ng-click = "$ctrl.removeItems(cartItems.id)">X</button>
    <button ng-click = "$ctrl.updateItems(cartItems.id, $ctrl.newItem.quantity)">Update Quantity</button>
    </section>
    </section>
    `,
    controller: ['shoppingCartService', function(shoppingCartService){
        const vm = this;

        shoppingCartService.getAllItems().then((response) => {
            vm.shoppingList = response;
        });

        vm.addItems.addItems(item).then((response) => {
            vm.shoppingList = response;
        });

        vm.updateItems.updateItems(id, quantity).then((response) => {
            vm.shoppingList = response;
        });
        
        vm.removeItems.deleteItems(item).then((response) => {
            vm.shoppingList = response;
        });
    }]
}

angular
    .module("App")
    .component("shoppingCart", shoppingCart);