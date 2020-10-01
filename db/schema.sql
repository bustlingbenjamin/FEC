-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
DROP DATABASE IF EXISTS Products; 
-- CREATE YOUR DATABASE
CREATE DATABASE Products;

\c products
-- CREATE YOUR TABLES
DROP TABLE IF EXISTS Items;

CREATE TABLE Items (

    ItemId Integer,
    Name text,
    ImgUrl text,
    Price DECIMAL(6,2)
);
-- ADD RECORDS TO YOUR TABLE
INSERT INTO Items (ItemId,Name,Imgurl,Price) VALUES (10,'Hammacher Schlemmer Lamp', 'https://github.com/bustlingbenjamin/FEC/blob/master/frontend/src/Images/Hammacher Schlemmer Lamp $399.95.jpg', 399.95);
INSERT INTO Items (ItemId,Name,Imgurl,Price) VALUES (11,'',,)
INSERT INTO Items (ItemId,Name,Imgurl,Price) VALUES (12,'',,)
INSERT INTO Items (ItemId,Name,Imgurl,Price) VALUES (13,'',,)
INSERT INTO Items (ItemId,Name,Imgurl,Price) VALUES (14,'',,)
INSERT INTO Items (ItemId,Name,Imgurl,Price) VALUES (15,'',,)
INSERT INTO Items (ItemId,Name,Imgurl,Price) VALUES (16,'',,)
INSERT INTO Items (ItemId,Name,Imgurl,Price) VALUES (17,'',,)
INSERT INTO Items (ItemId,Name,Imgurl,Price) VALUES (18,'',,)
INSERT INTO Items (ItemId,Name,Imgurl,Price) VALUES (19,'',,)


-- 10-Lamp
-- 11-White shirt
-- 12-Toothbrush
-- 13-Xbox
-- 14-Ps5
-- 15-Hairbrush
-- 16-Cantu (hair product
-- 17-Zippo lighter
-- 18-Apple keyboard
-- 19-AA batteries
