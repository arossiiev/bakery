<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220519141320 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE unauthorized_user_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE "user_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');

        $user = "\"user\"";
        $this->addSql("CREATE TABLE unauthorized_user (id INT NOT NULL DEFAULT nextval('unauthorized_user_id_seq'), email VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, second_name VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL, PRIMARY KEY(id))");
        $this->addSql('CREATE UNIQUE INDEX UNIQ_21931514E7927C74 ON unauthorized_user (email)');
        $this->addSql("CREATE TABLE $user (id INT NOT NULL DEFAULT nextval( 'user_id_seq'), email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, second_name VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL, PRIMARY KEY(id))");
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON "user" (email)');
//        $this->addSql('ALTER TABLE product ALTER id DROP DEFAULT');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs

        $this->addSql('DROP SEQUENCE unauthorized_user_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE "user_id_seq" CASCADE');
        $this->addSql('DROP TABLE unauthorized_user');
        $this->addSql('DROP TABLE "user"');
    }
}
