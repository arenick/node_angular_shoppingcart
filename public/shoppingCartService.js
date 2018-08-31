"use strict";

function shoppingCartService ($http) {
    const vm = this;

    vm.getAllItems = () => {
        return $http ({
            url: '/shopping-cart',
            method: 'GET'
        }).then((response) => {
            vm.cart = response.data;
            return vm.shoppingCart;
        })
    }
    vm.addItems = (item) => {
        return $http ({
            url: '/shopping-cart',
            method: 'POST',
            data: {
                product: item.product,
                price: item.price,
                quantity: item.product
            }
        }).then((response) => {
            return response.data;
        })
    }
    vm.updateItems = (id, quantity) => {
        return $http ({
            url: '/shopping-cart',
            method: 'PUT'
        }).then((response) => {
            vm.cart = response.data;
            return vm.cart;
        })
    }
    vm.deleteItems = (item) => {
        return $http ({
            url: '/shopping-cart',
            method: 'DELETE'
        }.then((results) => {
            vm.cart = response.data;
            return vm.cart;
        })
        )}
}

angular
    .module("App")
    .service("shoppingCartService", shoppingCartService);