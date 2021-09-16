class Author {
    static i=0;
    constructor(name) {
        this.name = name;
        Author.i++;
    }
    static getCounter() {
        return (console.log("Всего авторов в базе: ", this.i));
    }
}

class Books extends Author {
    books = [];
    constructor(name, books){
        super(name);
        this.books = books;
    }
    showbooks(){
        console.log("У запрашиваемого автора ",this.name, this.books.length, "работ в базе. Из них: ", this.books);
    }

}

const author1 = new Books("Терри Пратчетт", ['Мелкие боги', 'Мор','Плоский мир','Стража']);
const author2 = new Books('Марио Пьюзо', ['Крестный отец', 'Сицилиец']);
const author3 = new Books('Талеб Николас', ['Черный лебедь', 'Антихрупкость',]);


author1.showbooks();
Author.getCounter();
