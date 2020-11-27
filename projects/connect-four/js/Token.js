class Token {
    constructor() {
        this.owner = owner;
        //for identification and css
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;

    }
    get drawHTMLToken() {
        const token = document.getElementById('div');
        document.getElementById('game-board-underlay').appendChild(token);

        const div = document.createElement('div');
        token.setAttribute("id", this.id);
        token.setAttribute("class", "token");
        token.style.backgroundColor = this.owner.color;
    }



}

/**
 * Tokens, whether they've been dropped, who they belong to
 */