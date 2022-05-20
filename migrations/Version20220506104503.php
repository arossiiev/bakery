<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220506104503 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE product_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql("CREATE TABLE product (id INT NOT NULL DEFAULT nextval('product_id_seq'), product_type_id INT NOT NULL, name VARCHAR(255) NOT NULL, ingredients VARCHAR(512) NOT NULL, price INT NOT NULL, image_url VARCHAR(255) NOT NULL, PRIMARY KEY(id))");
        $this->addSql('CREATE INDEX IDX_D34A04AD14959723 ON product (product_type_id)');
        $this->addSql('ALTER TABLE product ADD CONSTRAINT FK_D34A04AD14959723 FOREIGN KEY (product_type_id) REFERENCES product_type (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
//        $this->addSql('ALTER TABLE product_type ALTER id DROP DEFAULT');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE product_id_seq CASCADE');
        $this->addSql('DROP TABLE product');
        $this->addSql('CREATE SEQUENCE product_type_id_seq');
        $this->addSql('SELECT setval(\'product_type_id_seq\', (SELECT MAX(id) FROM product_type))');
        $this->addSql('ALTER TABLE product_type ALTER id SET DEFAULT nextval(\'product_type_id_seq\')');
    }
}
