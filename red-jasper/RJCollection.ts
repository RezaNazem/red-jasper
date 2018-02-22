export class RJCollection<T> extends  Array {
    private list : Array<T> = []
    add(value : T)
    {
        this.list.push(value);
    }

    clear() : void
    {
        this.list = [];
    }    
}
