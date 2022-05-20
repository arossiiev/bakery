<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220519160101 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql("INSERT INTO product_type(name) VALUES (E'Круасани');");
        $this->addSql("INSERT INTO product_type(name) VALUES (E'Сендвічі');");
        $this->addSql("INSERT INTO product_type(name) VALUES (E'Печиво');");
        $this->addSql("INSERT INTO product_type(name) VALUES (E'Хліб');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Круасан вершковий з мигдалевим кремом', 1, E'Борошно пшеничне в/г, цукор, сіль, вода, дріжджі пресовані, масло вершкове 73%, масло вершкове 82,5%, клітковина, борошно мигдалеве, яйця курячі, пластівці мигдалеві. Вага 140 грам.', 5500, 'images/kruassan-slivochnyy-s-mindalnym-kremom.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Круасан з корицею', 1, E'Борошно пшеничне в/с, цукор, сіль, вода, дріжджі пресовані, масло вершкове 73%, масло вершкове 82%, жовток яєчний, клітковина, молоко 2,5%, кориця мелена, апельсиновий сік (для просочення), яйце куряче (для змащування). Вага 60 грам.', 2500, 'images/copy_kruassan-molochnyy.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Круасан зерновий', 1, E'Борошно пшеничне в/г, насіння соняшнику, насіння льону, клітковина пшенична, насіння гарбуза, пластівці вівсяні, борошно житнє, пудра цукрова, суха житня закваска, висівки пшеничні, борошно ячмінне солодове, сіль, ферменти, дріжджі, маргарин високої якості \"Aristo Pastry 80%\". Вага 60 грам.', 2500, 'images/kruassan-zernovy.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Круасан зерновий', 1, E'Борошно вищого сорту, цукор, сіль, вода, дріжджі пресовані, масло вершкове 82%, клітковина, молоко сухе, молоко 2,5%, ванілін, цукровий сироп (для просочення), яйце куряче (для змащування). Вага 60 грам.', 2500, 'images/kruassan-molochny.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Сендвіч «ЦЕЗАР» з куркою', 2, E'Чіабата пшенична з кунжутом (борошно в/г, сіль, закваска, дріжджі хлібопекарські, кунжут, вода), свіжий лист салату, філе куряче запечене, бекон, томат свіжий, майонез, гірчиця французька, мед, соєвий соус. Вага 240 грам.', 5000, 'images/cezar-s-kuritsey.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Сендвіч з яловичиною', 2, E'Чіабатта солодова (борошно в/г, сіль, закваска, дріжджі хлібопекарські, солодовий екстракт, вода), свіжий лист салату, яловичина соковита (копчено-варена), сир твердий, майонез, гірчиця медова. Вага 230 грам.', 5000, 'images/sendvich-s-govyadinoy.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Сендвіч з шинкою та сиром', 2, E'Чіабатта пшенична (борошно в/с, сіль, закваска, дріжджі хлібопекарські, борошно житнє, вода), свіжий лист салату, шинка варено-копчена, огірок маринований, сир твердий, майонез, гірчиця гостра, соєвий соус. Вага 245 грам.', 5000, 'images/sendvich-s-shinkoy-ta-syrom.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Печиво Біскотті', 3, E'Яйце, цукор, пшеничне борошно, розпушувач, сіль, ванільній цукор, лимонна цедра, волоський горіх, в\'ялена вишня. Вага 70 грам.', 4000, 'images/pechene-biskotti.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Печиво вівсяне з родзинками', 3, E'Вівсяні пластівці, цукор, яйця, вершкове масло, пшеничне борошно, розпушувач, родзинки, цукрова пудра. Вага 70 грам.', 4000, 'images/pechene-ovsyanoe-s-izumom.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Печиво Вулкан з чилі', 3, E'Пшеничне борошно, вершкове масло, какао, цукрова пудра, сіль, розпушувач, яйце, перець чилі. Вага 70 грам.', 4000, 'images/pechene-vulkan-s-chili.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Печиво карамельно-горіхове', 3, E'Цукор, мед, вершкове масло, волоський горіх, фундук, пшеничне борошно, овсяніе пластівці, яічній білок. Вага 70 грам.', 4500, 'images/pechene-karamelno-orekhovoe.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Хліб Бюрли солодовий на заквасці', 4, E'Борошно пшеничне в\с, борошно житнє, солод (екстракт), дріжджі хлібопекарські для закваски, закваска ферментована, клітковина, сіль, цукор, коріандр мелений, вода.', 3500, 'images/khleb-burli-solodovyy-na-zakvaske.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Хліб фірмовий на заквасці', 4, E'Борошно пшеничне в\г, дріжджі хлібопекарські для закваски, ячмінно-солодовий екстракт, клейковина, сіль, вода.', 4000, 'images/khleb-firmennyy-na-zakvaske.webp');");
        $this->addSql("INSERT INTO product(name, product_type_id, ingredients, price, image_url) VALUES (E'Хліб тостовий пшеничный. Вага 520 грамм.', 4, E'	Борошно пшеничне в\г, дріжджі хлібопекарські, суміш для тостового хліба \"Ізі Тост\", сіль, цукор, вода, жир на основі рослинних жирів 80% жирністю;', 2000, 'images/khleb-tostoviy.webp');");
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql("TRUNCATE prodict_type;");
        $this->addSql("TRUNCATE prodict;");
    }
}
