<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220519155843 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE order_line_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE order_line (id INT NOT NULL, client_order_id INT NOT NULL, product_id INT NOT NULL, quantity INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_9CE58EE1A3795DFD ON order_line (client_order_id)');
        $this->addSql('CREATE INDEX IDX_9CE58EE14584665A ON order_line (product_id)');
        $this->addSql('ALTER TABLE order_line ADD CONSTRAINT FK_9CE58EE1A3795DFD FOREIGN KEY (client_order_id) REFERENCES "order" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE order_line ADD CONSTRAINT FK_9CE58EE14584665A FOREIGN KEY (product_id) REFERENCES product (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs

        $this->addSql('DROP SEQUENCE order_line_id_seq CASCADE');
        $this->addSql('DROP TABLE order_line');

    }
}
