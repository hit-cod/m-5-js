class Storage {
    constructor([...items]) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(newItem) {        
        return this.items.push(newItem);
    }

    removeItem(itemToBeRemoved) {

        for (const item of this.items) {
            if (item === itemToBeRemoved) {
                const indexToBeRemoved = this.items.indexOf(itemToBeRemoved);
                this.items.splice(indexToBeRemoved, 1);
                break;
            }
        }

        return this.items
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]