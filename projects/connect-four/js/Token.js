class Token {
    constructor() {
        this.owner = owner;
        //for identification and css
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;

    }
    get drawHTMLToken() {
        const gameBoardUnderlay = document.getElementById('game-board-underlay');
        const div = document.createElement('div');
        div.setAttribute("id", `${this.id}`);
        div.className = 'token';
        div.append(gameBoardUnderlay);
    }



}

/**
 * Tokens, whether they've been dropped, who they belong to
 */