-- -----------------------------------------------------
-- Registra usuario e retorna o ID
-- @NOTE: Disable foreign key checks
-- @receives name,email,login,pass,hash,type_user
-- @returns id_user
-- -----------------------------------------------------
DROP FUNCTION IF EXISTS new_user;

DELIMITER //
CREATE FUNCTION new_user(name_p VARCHAR(45), 
				email_p VARCHAR(45), 
        login_p VARCHAR(45), 
				pass_p VARCHAR(45), 
				hash_p VARCHAR(45),
        type_user VARCHAR(45)) 

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


-- -----------------------------------------------------
-- Registra Paciente e retorna o ID
-- @NOTE: Disable foreign key checks
-- @returns id_patient
-- -----------------------------------------------------
DROP FUNCTION IF EXISTS new_patient;

DELIMITER //
CREATE FUNCTION new_patient(iduser_p VARCHAR(45), 
        nome_p VARCHAR(45), 
        cpf_p VARCHAR(20), 
        nr_prontuario_p INT, 
        nr_mv_p INT, 
        data_nasc_p DATE,
        idade_p INT,
        etnia_p CHAR(1),
        tel1_p VARCHAR(20),
        tel2_p VARCHAR(20),
        tel_emerg_p VARCHAR(20),
        cel_p VARCHAR(20),
        endereco_p TEXT) 

RETURNS INT
  BEGIN

  SET FOREIGN_KEY_CHECKS=0;
  INSERT INTO people (name,cpf,dtnasc,tel1,tel2,tel_emerg,cel,address) VALUES(
    name_p,
    cpf_p,
    data_nasc_p,
    tel1_p,
    tel2_p,
    tel_emerg_p,
    cel_p,
    endereco_p
  );
  
  SELECT LAST_INSERT_ID() INTO @id_people;

  INSERT INTO patient (idpeople,iduser,protuary_number,mv_number) VALUES(
    @id_people,
    iduser,
    nr_prontuario_p,
    nr_mv_p
  );

  SELECT LAST_INSERT_ID() INTO @id_patient;

  RETURN @id_patient;
  END //
DELIMITER ;
