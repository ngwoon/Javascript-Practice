function omok() {
    this.BOARD_SIZE = 18,
    this.board = new Array(this.BOARD_SIZE);
    this.map = document.getElementById("board");
    this.flag = 0;

    this.init = function init() {
        for(let i=0; i<this.BOARD_SIZE; ++i)
            this.board[i] = new Array(this.BOARD_SIZE);
        
        for(let i=0; i<this.BOARD_SIZE; ++i) {
            for(let j=0; j<this.BOARD_SIZE; ++j) {
                let newArea = document.createElement("div");
                newArea.classList.add("piece");
                
                newArea.addEventListener('click', function(event) {
                    if(event.target.className === "piece") {
                        if(this.flag === 1) {
                            event.target.className = "white-stone";
                            this.flag = 0;
                        } else {
                            event.target.className = "black-stone";
                            this.flag = 1;
                        }
                    }
                });

                this.map.appendChild(newArea);
            }
            let br = document.createElement("br");
            this.map.appendChild(br);
        }
    }
}

let newGame = new omok();
newGame.init();