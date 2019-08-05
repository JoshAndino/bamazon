CREATE database bamazon;
DROP DATABASE IF EXISTS bamazon;
USE bamazon;

CREATE TABLE inventory 
	(
		id INT NOT NULL AUTO_INCREMENT,
        product_name VARCHAR (100) NOT NULL,
        department_name VARCHAR (100) NOT NULL,
		price DECIMAL (10,2) NOT NULL,
		stock_quantity INT NULL,
        PRIMARY KEY (id)
    );
    INSERT INTO inventory (product_name,department_name,price,stock_quantity)
    VALUES ("STADIUM EVENTS","Video Game","600","4"),
           ("1990 NINTENDO WORLD CHAMPIONSHIPS","Video Game","12000","5"),   
           ("NINTENDO CAMPUS CHALLENGE","Video Game","7000","2"),
           ("EXERTAINMENT MOUNTAIN BIKE RALLY & SPEED RACER COMBO CART","Video Game","9000","10"),
           ("SUPER COPA","Video Game","500","25"),
           ("NINTENDO POWERFEST 1994","Video Game","1299","35"),
           ("AIR RAID","Video Game","2015","35"),
           ("RED SEA CROSSING","Video Game","1900","15"),
           ("ATLANTIS II ","Video Game","2999","85"),
           (" E.T.: THE EXTRA-TERRESTRIAL","Video Game","3000","85");
           
           
           
           
           
           
           
           



    

    SELECT * FROM inventoryCREATE database bamazon
