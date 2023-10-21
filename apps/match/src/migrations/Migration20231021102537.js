'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20231021102537 extends Migration {

  async up() {
    this.addSql('alter table "game" add column "tournament_id" uuid not null;');
    this.addSql('alter table "game" add constraint "game_tournament_id_foreign" foreign key ("tournament_id") references "tournament" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "game" rename column "game_points" to "game_status";');
  }

  async down() {
    this.addSql('alter table "game" drop constraint "game_tournament_id_foreign";');

    this.addSql('alter table "game" drop column "tournament_id";');
    this.addSql('alter table "game" rename column "game_status" to "game_points";');
  }

}
exports.Migration20231021102537 = Migration20231021102537;
