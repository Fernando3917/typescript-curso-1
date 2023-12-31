export class Negociacao {
   
    constructor(
        private _data: Date, 
        public readonly _quantidade: number,
        public readonly _valor: number) {}


    get data(): Date {
        const data = new Date(this._data.getTime());
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

  
}