'use strict';

function Maze(width, height) {
	this.width = width;
	this.height = height;

	this.startX = null;
	this.startY = null;
	this.startOrientation = null;
	this.endX = null;
	this.endY = null;

	this.spaces = [];
	this.directions = [ 'north', 'west', 'east', 'south' ];

	let x, y;
	for (x = 1; x <= width; x++) {
		this.spaces[x] = [];
		for (y = 1; y <= height; y++) {
			this.spaces[x][y] = new MazeSpace(this.directions);
		}
	}
}

Maze.prototype.setStart = function(x, y, orientation) {
	if (this.isValidDirection(orientation) && this.isInBounds(x, y)) {
		this.startX = x;
		this.startY = y;
		this.startOrientation = orientation;
		return true;
	}
	return false;
};

Maze.prototype.setEnd = function(x, y) {
	if (this.isInBounds(x, y)) {
		this.endX = x;
		this.endY = y;
		return true;
	}
	return false;
};

Maze.prototype.setWall = function(x, y, directon) {
	if (this.isInBounds(x, y) && this.isValidDirection(directon)) {
		this.spaces[x][y].setWall(directon);
		return true;
	}
	return false;
};

Maze.prototype.isValidDirection = function(directon) {
	return this.directions.indexOf(directon) !== -1;
};

Maze.prototype.isInBounds = function(x, y) {
	return x > 0 && x <= this.width && y > 0 && y <= this.height;
};

Maze.prototype.canMove = function(x, y, direction) {
	if (!this.isValidDirection(direction)) {
		return false;
	}
	if (!this.isInBounds(x, y)) {
		return false;
	}

	let forwardX, forwardy;
	switch (direction) {
		case 'north':
			forwardX = x;
			forwardy = y + 1;
			break;
		case 'east':
			forwardX = x + 1;
			forwardy = y;
			break;
		case 'south':
			forwardX = x;
			forwardy = y - 1;
			break;
		case 'west':
			forwardX = x - 1;
			forwardy = y;
			break;
	}
	if (!this.isInBounds(forwardX, forwardy)) {
		return false;
	}

	if (this.spaces[x][y][direction]) {
		return false;
	}

	let opposites = {
		north: 'south',
		east: 'west',
		south: 'north',
		west: 'east'
	};

	if (this.spaces[forwardX][forwardy][opposites[direction]]) {
		return false;
	}

	return true;
};
