class StringBuilder {
    constructor(value) {
        this._value = value;
    }

    get value () {
        return this._value;
    }

    append(str) {
        this._value += str;
    }

    prepend(str) {
        this._value = str.concat(this._value);  
    }

    pad(str) {
        this._value += str;
        this._value = str.concat(this._value);
    }
}

const builder = new StringBuilder('.');
console.log(builder.value);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='