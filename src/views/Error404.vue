<template lang="pug">
#mainVue.container
  .heading
    h1.title 2048
    .scores-container
      transition-group(name="fade")
        .score-container(key="1") {{conf.score}}
      .best-container {{conf.bestScore}}
  .above-game
    p.game-intro Join the numbers and get the
      strong  2048 tile!
    a.restart-button(v-on:click="init") New Game
    label.left(for="noTiles") Select the number of tiles
    v-select(:items="items" v-model="tileNo" v-on:change="changesTilesSize" class="select")
  .game-container(
    :style="{width:findDimension + 'px', height: findDimension + 'px'}"
  )
    .game-message
      p
      //- gameover messages are displayed in p tag
      .lower
        a.keep-playing-button(v-on:click="clearMessage") Keep going
        a.retry-button(v-on:click="init") Try again
    .grid-container
      .grid-row(v-for="g in grid")
        .grid-cell(v-for="g in grid")
    tile(:tiles="tiles")
  v-btn(@click="arr.push(45)") Toggle
  v-btn(@click="arr.pop()") goggle
  transition-group(name="fade")
    div(key="1")
    p(v-for="(i,key) in arr.length" :key="key") hello
</template>
<script>
import { gameStorage } from "../plugins/store.js";
import tile from "../components/tile";
export default {
  name: "mainVue",
  components: {
    tile: tile
  },
  data: () => ({
    tileDimension: 124,
    tilePosition: 121,
    startTiles: 2,
    tiles: [],
    grid: [],
    conf: gameStorage.fetch("vue2048-config"),
    items: [4, 5, 6],
    tileNo: 4,
    show: false,
    arr: [1, 2, 3, 4],
    map: {
      ArrowUp: 0, // Up
      ArrowRight: 1, // Right
      ArrowDown: 2, // Down
      ArrowLeft: 3, // Left
      k: 0, // Vim up
      l: 1, // Vim right
      j: 2, // Vim down
      h: 3, // Vim left
      w: 0, // W
      d: 1, // D
      s: 2, // S
      a: 3 // A
    },
    startX: 0,
    startY: 0,
    distX: 0,
    distY: 0,
    threshold: 150,
    allowedTime: 500,
    elapsedTime: 0,
    startTime: 0
  }),
  created: function() {
    this.getWindowSize();
    window.addEventListener("keydown", event => {
      var modifiers =
        event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
      var mapped = this.map[event.key];

      if (!modifiers) {
        if (mapped !== undefined) {
          event.preventDefault();
          this.move(mapped);
        }
      }
      if (!modifiers && event.key === "r") {
        this.init();
      }
    });
    window.addEventListener("touchstart", event => {
      var touchobj = event.changedTouches[0];
      this.distX = 0;
      this.startX = touchobj.pageX;
      this.startY = touchobj.pageY;
      this.startTime = new Date().getTime();
      //event.preventDefault();
    });
    window.addEventListener("touchend", event => {
      var touchobj = event.changedTouches[0];
      this.distX = touchobj.pageX - this.startX;
      this.distY = touchobj.pageY - this.startY;
      this.elapsedTime = new Date().getTime() - this.startTime;
      var swiperight =
        this.elapsedTime <= this.allowedTime &&
        this.distX >= this.threshold &&
        Math.abs(this.distY) <= 100;
      var swipeleft =
        this.elapsedTime <= this.allowedTime &&
        this.distX <= -1 * this.threshold &&
        Math.abs(this.distY) <= 100;
      var swipeup =
        this.elapsedTime <= this.allowedTime &&
        this.distY <= -1 * this.threshold &&
        Math.abs(this.distX) <= 100;
      var swipedown =
        this.elapsedTime <= this.allowedTime &&
        this.distY >= this.threshold &&
        Math.abs(this.distX) <= 100;
      this.handleswipe(swiperight, swipeleft, swipeup, swipedown);
      //event.preventDefault();
    });
    window.addEventListener("resize", event => {
      if (event) {
        this.getWindowSize();
      }
    });
  },
  mounted: function() {
    var data = gameStorage.fetch("vue2048"),
      conf = this.conf;

    if (conf.score) {
      this.continueGame(data);
    } else {
      if (conf.length === 0) {
        //First Kick
        this.conf = {
          score: 0,
          size: 4,
          bestScore: 0
        };
      }
      this.init();
    }

    this.$watch("tiles", function(tiles) {
      gameStorage.save("vue2048", tiles);
    });

    this.$watch("conf", function(conf) {
      gameStorage.save("vue2048-config", conf);
    });
  },
  //Can go to templates
  computed: {
    findDimension: function() {
      var containerSize = this.grid.length * this.tileDimension;
      return containerSize;
    },

    selected: function() {
      return "";
    },

    allDone: {
      get: function() {
        return this.remaining === 0;
      },
      set: function(value) {
        this.todos.forEach(function(todo) {
          todo.completed = value;
        });
      }
    }
  },

  directives: {
    selected: {
      isEmpty: true,
      bind: function(el, binding) {
        //function()
        if (binding) el.value = binding;
      }
    }
  },

  methods: {
    init: function() {
      var startTiles = this.startTiles;

      this.initArrayGrid(this.tileNo);
      this.clearMessage();

      this.tiles = [];
      this.updateScore(0);

      for (var i = 0; i < startTiles; i++) {
        this.addRandomTile();
      }
    },

    continueGame: function(data) {
      var arr;
      this.initArrayGrid(this.conf.size);
      arr = this.grid;
      this.tiles = data;

      data.forEach(function(item) {
        arr[item.x][item.y] = 1;
      });
    },

    gameOver: function() {
      this.message();
    },

    initArrayGrid: function(size) {
      var arr = [];
      for (var x = 0; x < size; x++) {
        arr[x] = [];
        for (var y = 0; y < size; y++) {
          arr[x][y] = 0;
        }
      }

      this.grid = arr;
    },

    changesTilesSize: function() {
      this.conf.size = this.tileNo;

      if (document.activeElement) document.activeElement.blur();

      this.init();
    },

    addRandomTile: function() {
      if (this.availableCells().length > 0) {
        var value = Math.random() < 0.9 ? 2 : 4,
          randomCell = this.randomAvailableCell();

        this.addTile({
          x: randomCell.x,
          y: randomCell.y,
          value: value,
          merged: false
        });
      }
    },

    addTile: function(tile) {
      this.tiles = [
        ...this.tiles,
        {
          x: tile.x,
          y: tile.y,
          value: tile.value,
          merged: tile.merged
        }
      ];

      this.grid[tile.x][tile.y] = 1;
    },

    randomAvailableCell: function() {
      var cells = this.availableCells();

      if (cells.length) {
        return cells[Math.floor(Math.random() * cells.length)];
      }
    },

    availableCells: function() {
      var cells = [],
        size = this.conf.size,
        grid = this.grid;

      for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
          if (!grid[x][y]) {
            cells.push({
              x: x,
              y: y
            });
          }
        }
      }

      return cells;
    },

    getVector: function(direction) {
      var map = {
        0: {
          x: 0,
          y: -1
        }, // Up
        1: {
          x: 1,
          y: 0
        }, // Right
        2: {
          x: 0,
          y: 1
        }, // Down
        3: {
          x: -1,
          y: 0
        } // Left
      };

      return map[direction];
    },

    findFarthestPosition: function(cell, vector) {
      var previous;

      do {
        previous = cell;
        cell = {
          x: previous.x + vector.x,
          y: previous.y + vector.y
        };
      } while (this.withinBounds(cell) && !this.grid[cell.x][cell.y]);

      return {
        farthest: previous,
        next: cell
      };
    },

    findTile: function(position) {
      if (position.x === -1 || position.y === -1) return null;
      else {
        var tiles = this.tiles;

        return tiles.filter(function(item) {
          return item.x === position.x && item.y === position.y;
        })[0];
      }
    },

    moveTile: function(tile, position) {
      if (tile.x === position.x && tile.y === position.y) {
        return false;
      } else {
        this.grid[tile.x][tile.y] = 0;
        this.grid[position.x][position.y] = 1;

        tile.x = position.x;
        tile.y = position.y;

        return true;
      }
    },

    mergeTiles: function(curr, next) {
      next.value *= 2;
      next.merged = true;

      var tiles = this.tiles;

      //Better Way to find index of data
      for (var key in tiles) {
        if (tiles[key].x === curr.x && tiles[key].y === curr.y) {
          this.tiles.splice(parseInt(key), 1);
          break;
        }
      }

      this.grid[curr.x][curr.y] = 0;

      // Update the score
      this.updateScore(next.value);

      return true;
    },

    handleswipe: function(swiperight, swipeleft, swipeup, swipedown) {
      if (swiperight) {
        this.move(1);
      } else if (swipeleft) {
        this.move(3);
      } else if (swipeup) {
        this.move(0);
      } else if (swipedown) {
        this.move(2);
      }
    },
    move: function(direction) {
      var vector = this.getVector(direction);
      var traversals = this.buildTraversals(vector);
      var moved = false;
      var self = this;
      var grid = self.grid;
      //var positions;
      //var next;
      //var tile;

      traversals.x.forEach(function(x) {
        traversals.y.forEach(function(y) {
          if (grid[x][y]) {
            var tile = self.findTile({
              x: x,
              y: y
            });

            //tile.merged = false;

            var positions = self.findFarthestPosition(
              {
                x: x,
                y: y
              },
              vector
            );
            var next = self.findTile(positions.next);
            // Only one merger per row traversal?
            if (next && next.value === tile.value) {
              moved = self.mergeTiles(tile, next, positions.next);
            } else {
              moved = self.moveTile(tile, positions.farthest);
            }
          }
        });
      });

      if (moved) {
        this.addRandomTile();

        if (grid.toString().indexOf("0") === -1) {
          if (!this.tileMatchesAvailable()) {
            this.gameOver();
          }
        }
      }
    },

    tileMatchesAvailable: function() {
      var size = this.conf.size;
      var grid = this.grid;
      //var tiles = this.tiles;
      var tile;

      for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
          tile = grid[x][y];

          if (tile) {
            for (var direction = 0; direction < 4; direction++) {
              var vector = this.getVector(direction);
              var cell = {
                  x: x + vector.x,
                  y: y + vector.y
                },
                other;

              if (
                cell.x >= 0 &&
                cell.x < size &&
                cell.y >= 0 &&
                cell.y < size
              ) {
                other = grid[cell.x][cell.y];
              } else {
                continue;
              }

              if (
                other &&
                this.findTile(cell).value ===
                  this.findTile({
                    x: x,
                    y: y
                  }).value
              ) {
                return true;
              }
            }
          }
        }
      }

      return false;
    },

    withinBounds: function(position) {
      var size = this.conf.size;

      return (
        position.x >= 0 &&
        position.x < size &&
        position.y >= 0 &&
        position.y < size
      );
    },

    buildTraversals: function(vector) {
      var traversals = {
          x: [],
          y: []
        },
        size = this.conf.size;

      for (var pos = 0; pos < size; pos++) {
        traversals.x.push(pos);
        traversals.y.push(pos);
      }

      // Always traverse from the farthest cell in the chosen direction
      if (vector.x === 1) traversals.x = traversals.x.reverse();
      if (vector.y === 1) traversals.y = traversals.y.reverse();

      return traversals;
    },

    updateScore: function(score) {
      var scoreContainer = document.getElementsByClassName(
        "score-container"
      )[0];

      //On init
      if (score === 0) {
        this.conf.score = 0;
        //gameStorage.save('score', 0);

        return false;
      }

      this.conf.score += score;
      //gameStorage.save('score', this.score);

      if (this.conf.score > this.conf.bestScore) {
        this.conf.bestScore = this.conf.score;
        //gameStorage.save('bestScore', this.bestScore);
      }

      // The mighty 2048 tile
      if (score === 2048)
        //if 2048 tile is formed
        this.message(true);

      var addition = document.createElement("div");
      addition.classList.add("score-addition");
      addition.setAttribute("key", "1");
      addition.textContent = "+" + score;
      scoreContainer.insertAdjacentElement("afterend", addition);
    },

    message: function(won) {
      var type = won ? "game-won" : "game-over";
      var message = won ? "You win!" : "Game over!";
      var messageContainer = document.querySelector(".game-message");

      messageContainer.classList.add(type);
      messageContainer.getElementsByTagName("p")[0].textContent = message;
    },

    clearMessage: function() {
      //was called on line 113
      var messageContainer = document.querySelector(".game-message");

      messageContainer.classList.remove("game-won");
      messageContainer.classList.remove("game-over");
    },

    clearContainer: function(container) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    },

    getWindowSize: function() {
      var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName("body")[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth;

      if (x <= 520) {
        this.tileDimension = 69.5;
        this.tilePosition = 67;
      } else {
        this.tileDimension = 124;
        this.tilePosition = 121;
      }
    }
  }
};
</script>
<style scoped src="../plugins/style.css"></style>
