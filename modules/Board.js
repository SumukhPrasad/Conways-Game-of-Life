class Board {
     constructor (boardArray, dead, alive, interval) {
          this.array = boardArray;
          this.deadChar = dead;
          this.aliveChar = alive;
          this.interval = interval;
          this.tick = 0;
          if (typeof this.array !== "object") {
               throw "Expected array, got " + typeof this.array + " instead!";
          }
          if (typeof this.deadChar !== "string" || typeof this.aliveChar !== "string") {
               throw "Type of aliveChar or deadChar is not String!"
          }
          this.formattedBoard = [];
          for (let i = 0; i < this.array.length; i++) {
               const subArray = this.array[i];
               if (typeof subArray !== "object") {
                    throw "Element at index " + i + " of Board is not an array!"
               }
               var subFormattedArray = [];
               for (let j = 0; j < subArray.length; j++) {
                    const element = subArray[j];
                    if (typeof element !== "string") {
                         throw "Expected String, got " + typeof element + " instead! (" + i + ", " + j + ")";
                    }
                    if (element !== this.deadChar && element !== this.aliveChar) {
                         throw "Expected deadChar or aliveChar, got '" + element.toString() + "' instead!";
                    }
                    switch (element) {
                         case this.deadChar:
                              subFormattedArray[j] = 0;
                              break;
                         case this.aliveChar:
                              subFormattedArray[j] = 1;
                              break;
                    }
               }
               this.formattedBoard.push(subFormattedArray);
          }
          this.rows = this.formattedBoard.length;
          this.columns = this.formattedBoard[0].length;
          this.staticArray = this.formattedBoard;
          this.workingArray = this.setAllToZero(this.staticArray);
     }

     setAllToZero(twoDArray) {
          if (typeof twoDArray[0] !== "object") {
               throw "Expected array!";
          }
          var zeroedArray = [];
          for (let i = 0; i < this.array.length; i++) {
               const subArray = this.array[i];
               if (typeof subArray !== "object") {
                    throw "Element at index " + i + " of Board is not an array!"
               }
               var subZeroedArray = [];
               for (let j = 0; j < subArray.length; j++) {
                    subZeroedArray[j]=0
               }
               zeroedArray.push(subZeroedArray);
          }
          return zeroedArray;
     }

     updateLifeCycle() {
          for (let i = 0; i < this.rows; i++) {
               for (let j = 0; j < this.columns; j++) {
                   let new_state = this.updateCellValue(i, j);
                   this.workingArray[i][j] = new_state;
               }
           }
          this.staticArray = this.workingArray;
          this.workingArray = this.setAllToZero(this.workingArray);
          this.tick++;
     }

     updateCellValue(row, col) {
          const total = this.countNeighbours(row, col);
          if (total > 3 || total < 2) {
               return 0;
          } else if (this.staticArray[row][col] == 0 && total == 3) {
               return 1;
          } else {
               return this.staticArray[row][col];
          }
     }

     countNeighbours(r, c) {
          let totalNeighbours = 0;
          totalNeighbours += this.noNaNHelper(this.setCellValueHelper(r - 1, c - 1));
          totalNeighbours += this.noNaNHelper(this.setCellValueHelper(r - 1, c));
          totalNeighbours += this.noNaNHelper(this.setCellValueHelper(r - 1, c + 1));
          totalNeighbours += this.noNaNHelper(this.setCellValueHelper(r, c - 1));
          totalNeighbours += this.noNaNHelper(this.setCellValueHelper(r, c + 1));
          totalNeighbours += this.noNaNHelper(this.setCellValueHelper(r + 1, c - 1));
          totalNeighbours += this.noNaNHelper(this.setCellValueHelper(r + 1, c));
          totalNeighbours += this.noNaNHelper(this.setCellValueHelper(r + 1, c + 1));
          return totalNeighbours;
     }

     noNaNHelper(n) {
          return isNaN( n ) ? 0 : n;
     }

     setCellValueHelper(r, c) {
          try {
               return this.staticArray[r][c];
          } catch {
               return 0;
          }
     }

     runGame() {
          setInterval(() => {
               this.printBoard();
               this.updateLifeCycle();
           }, this.interval)
     }

     printBoard() {
          var result = "";
          for (let i = 0; i < this.staticArray.length; i++) {
               const subArray = this.staticArray[i];
               result+=subArray.toString().replace(/,/gi, "").replace(/0/gi, this.deadChar).replace(/1/gi, this.aliveChar)+"\n";
          }
          result+="\n\nCycle: "+this.tick;
          console.clear();
          console.log(result);
     }
}

module.exports = { Board };