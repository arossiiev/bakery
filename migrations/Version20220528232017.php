<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220528232017 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs

        $this->addSql('ALTER TABLE product_type ADD slug VARCHAR(255)');
        $this->addSql("UPDATE product_type SET slug='cruasany' WHERE name = 'Круасани'");
        $this->addSql("UPDATE product_type SET slug='sandwich' WHERE name = 'Сендвічі'");
        $this->addSql("UPDATE product_type SET slug='pechivo' WHERE name = 'Печиво'");
        $this->addSql("UPDATE product_type SET slug='hlib' WHERE name = 'Хліб'");
        $this->addSql('ALTER TABLE product_type ALTER COLUMN slug SET NOT NULL;');

    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs

        $this->addSql('ALTER TABLE product_type DROP slug');

    }
}
