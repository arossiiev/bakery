<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220506103521 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE product_type_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql("CREATE TABLE product_type (id INT NOT NULL DEFAULT nextval('product_type_id_seq'), name VARCHAR(255) NOT NULL, PRIMARY KEY(id))");
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE product_type_id_seq CASCADE');
        $this->addSql('DROP TABLE product_type');
    }
}
