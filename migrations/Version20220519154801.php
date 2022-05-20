<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220519154801 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE "order_id_seq" INCREMENT BY 1 MINVALUE 1 START 1');
        $order = "\"order\"";
        $this->addSql("CREATE TABLE $order (id INT NOT NULL DEFAULT nextval('order_id_seq'), authorized_user_id INT DEFAULT NULL, unauthorized_user_id INT DEFAULT NULL, total INT NOT NULL, PRIMARY KEY(id))");
        $this->addSql('CREATE INDEX IDX_F529939850AAB91A ON "order" (authorized_user_id)');
        $this->addSql('CREATE INDEX IDX_F529939823DDEA57 ON "order" (unauthorized_user_id)');
        $this->addSql('ALTER TABLE "order" ADD CONSTRAINT FK_F529939850AAB91A FOREIGN KEY (authorized_user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE "order" ADD CONSTRAINT FK_F529939823DDEA57 FOREIGN KEY (unauthorized_user_id) REFERENCES unauthorized_user (id) NOT DEFERRABLE INITIALLY IMMEDIATE');

    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs

        $this->addSql('DROP SEQUENCE "order_id_seq" CASCADE');
        $this->addSql('DROP TABLE "order"');

    }
}
