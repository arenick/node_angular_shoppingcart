"use strict";

function shoppingCartService ($http) {
    const vm = this;

    vm.getAllItems = () => {
        return $http ({
            url: '/list/all',
            method: 'GET'
        }).then((response) => {
            vm.cart = response.data;
            return vm.cart;
        })
    }
    vm.addItems = (item) => {
        console.log(item);
        return $http ({
            url: '/list/all',
            method: 'POST',
            data: {
                product: item.product,
                price: item.price,
                quantity: item.product
            }
        }).then((response) => {
            vm.cart = response.data;
            console.log(item.price);
            return response.data;
        })
    }
    vm.updateItems = (id, quantity) => {
        return $http ({
            url: '/list/:id',
            method: 'PUT'
        }).then((response) => {
            vm.cart = response.data;
            return vm.cart;
        })
    }
    vm.deleteItems = (item) => {
        return $http ({
            url: '/list/:id',
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