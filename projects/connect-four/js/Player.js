class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        //to identify which player the tokens belong to 
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    createTokens(num) {
        //where we will store tokens
        const tokens = [];
        //creates tokens
        for (let i = 0; i < num; i++) {
            //create a variable named token and assign it to new token object
            //loop index and owning player
            let token = new Token(i, this)
            tokens.push(token)
        }
        //this returns to this.tokens above
        return tokens;
    }

}

