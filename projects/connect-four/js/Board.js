class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();

    }
    /**
     * Generates 2D array of spaces.
     * @return {array}          An array of space objects
     */
    createSpaces() {
        //where the spaces will go
        const spaces = [];
        //columns are created
        for (let x = 0; x < this.columns; x++) {
            const column = [];

            //rows are added to columns
            for (let y = 0; y < this.rows; y++) {
                //new space objects created
                let space = new Space(x, y);
                //and pushed to the columns
                column.push(space);
                //add to board array
                spaces.push(space)
            }
        }
        drawHTMLBoard() {
            for (let i = 0; i < this.columns; i++) {

            }
        }
    }

}

