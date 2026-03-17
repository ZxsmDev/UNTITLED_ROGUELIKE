export default class HUD {
  constructor(gameManager) {
    this.game = gameManager;
    this.font = "20px Arial";
    this.color = "white";
  }
  render(ctx) {
    ctx.save();
    ctx.font = this.font;
    ctx.fillStyle = this.color;

    ctx.fillText("Health: ", 10, this.game.height - 40);

    const player = this.game.player;
    const healthRatio = player.combat.health / player.combat.maxHealth;

    ctx.fillStyle = "#d65d5d";
    ctx.fillRect(10, this.game.height - 30, this.game.width / 4, 20);
    ctx.fillStyle = "#b9ffac";
    ctx.fillRect(
      10,
      this.game.height - 30,
      !player.combat.dead ? (this.game.width / 4) * healthRatio : 0,
      20,
    );

    ctx.restore();
  }
}
