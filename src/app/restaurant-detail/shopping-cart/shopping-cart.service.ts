import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menuItem.model';


export class ShoppingCartService{
    items: CartItem[] = []

    clear(){
        this.items = []
    }

    addItem(item:MenuItem){
        let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
        if (foundItem){
            foundItem.quantity = foundItem.quantity + 1
        } else{
            this.items.push(new CartItem(item))
        }
    }

    removeitem(item: any){
        this.items.splice(this.items.indexOf(item), 1)
    }

    total():number{
        return this.items.map(item => item.value()).reduce((prev, value) => prev+ value, 0)
    }
}