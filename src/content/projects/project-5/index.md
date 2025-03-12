---
title: "John Conway's Game of Life"
description: "Implementation of Conway's Game of Life using Rust compiled to WebAssembly."
date: "2023-04-24"
demoURL: "https://reiniss.com/projects/wasm-game-of-life/index.html"
---

## Overview

My brief journey into trying out Rust and WebAssembly led me to a [tutorial](https://rustwasm.github.io/book/game-of-life/introduction.html) on how to implement [John Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

In this implementation, the starting state of the game is a random configuration of cells. At any point, the game can be paused, and cells can be turned on or off by clicking on them. The game can be resumed, and the cells will evolve according to the rules of the Game of Life.

## Demo

You can try out the Game of Life implementation [here](https://reiniss.com/projects/wasm-game-of-life/index.html).

## Preview

![John Conway's Game of Life implementation](/game_of_life.png)
