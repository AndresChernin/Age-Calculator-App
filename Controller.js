class Controller{
    constructor(model){
        this.model=model;
    }
    process(values){
        this.model.setData(Number(values.day),Number(values.month),Number(values.year));
        return {result: this.model.sendResults()};
    }
}