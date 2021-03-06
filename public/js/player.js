"use strict";

var Player = function(data){
  //set name
  this.id = data.id;
  this.x = data.x;
  this.y = data.y;
  this.speed = 1;
  this.type = data.type;
};

//TODO: fix so this.x i iupdated and not only initial pos

Player.prototype.addSprite = function(game){
  this.sprite = game.add.sprite(this.x, this.y, this.type);
  game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
  this.sprite.body.collideWorldBounds = true;
  this.sprite.id = this.id;
  this.height = this.sprite.height;
  this.width = this.sprite.width;
  return this.sprite;
};

Player.prototype.setPosition = function(pos){
  this.sprite.x = pos.x;
  this.sprite.y = pos.y;
  this.x = this.sprite.x;
  this.y = this.sprite.y;
  return pos;//TODO: need return?
};

Player.prototype.getPosition = function(){
  var pos = {
    x: this.sprite.x,
    y: this.sprite.y
  };
  return pos;
};
