-- -----------------------------------------------------
-- Registra usuario e retorna o ID
-- @NOTE: Disable foreign key checks
-- @receives name,email,login,pass,hash,type_user
-- @returns id_user
-- -----------------------------------------------------
DROP FUNCTION IF EXISTS new_user

DELIMITER //
CREATE FUNCTION new_user(name_p VARCHAR(45), 
				email_p VARCHAR(45), 
        login_p VARCHAR(45), 
				pass_p VARCHAR(45), 
				hash_p VARCHAR(45),
        type_user INT) 

RETURNS INT
  BEGIN

  SET FOREIGN_KEY_CHECKS=0;
  INSERT INTO people (name) VALUES(
    name_p
  );
  
  SELECT LAST_INSERT_ID() INTO @id_people;

  INSERT INTO user (idpeople,email,login,pass,hash,type_user) VALUES(
    @id_people,
    email_p,
    login_p,
    pass_p,
    hash_p,
    type_user
  );

  SELECT LAST_INSERT_ID() INTO @id_user;

  RETURN @id_user;
  END //
DELIMITER ;