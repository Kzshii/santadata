-- -----------------------------------------------------
-- View de login
-- @returns id, type_user, name, picture
-- -----------------------------------------------------
CREATE VIEW `login` AS
SELECT u.id , u.type_user, u.login, u.pass, p.name, p.picture FROM user AS u
INNER JOIN people as p ON u.idpeople = p.idpeople