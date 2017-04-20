var game = new Phaser.Game(1600, 1000, Phaser.AUTO);

game.state.add("state3", demo.state3);
game.state.add("loadingpage", demo.loadingpage);
game.state.add("tutorial", demo.tutorial);
game.state.add("energy_transfer_FX", demo.energy_transfer_FX);

game.state.start("state3");

