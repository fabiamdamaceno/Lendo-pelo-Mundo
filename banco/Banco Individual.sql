CREATE DATABASE lendoMundo;
USE lendoMundo;
-- drop database lendoMundo;
CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    sobrenome VARCHAR(45),
    genero VARCHAR(9),
		CONSTRAINT chkGenero CHECK (genero IN ('masculino', 'feminino', 'outros')),
    email VARCHAR(45) NOT NULL,
		CONSTRAINT chkEmail CHECK (email LIKE '%@%'),
    senha VARCHAR(45) NOT NULL,
    metaAnual INT
);
SELECT * FROM usuario;

INSERT INTO usuario (nome, sobrenome, genero, email, senha, metaAnual) VALUES
	('Fábiam', 'Damaceno da Silva', 'masculino', 'fabiam.damaceno@gmail.com', MD5('L@pis123'), 12);
    
CREATE TABLE leitura (
	idLeituraUsuario INT PRIMARY KEY AUTO_INCREMENT,
    fkLeituraUsuario_Usuario INT,
		CONSTRAINT fkReLeituraUsuario_Usuario
		FOREIGN KEY (fkLeituraUsuario_Usuario)
        REFERENCES Usuario(idUsuario),
	titulo VARCHAR(100),
	rating DECIMAL(4,2),
    autor VARCHAR(45),
    genAutor VARCHAR(9),
    paisAutor VARCHAR(45),
    genLiterario VARCHAR(45),
    dataLeitura DATE DEFAULT (CURRENT_DATE),
    citacaoPreferida VARCHAR(300)
);
    SELECT * from leitura;
INSERT INTO leitura (fkLeituraUsuario_Usuario, titulo, rating, autor, genAutor, paisAutor, genLiterario, dataLeitura, citacaoPreferida) VALUES
	('1', 'Os Irmãos Karamazov', 5, 'Fyodor Dostoevsky', 'masculino', 'Rússia', 'Romance', '2024-11-27', 'Para o realista, não é a fé que nasce do milagre: é o milagre que nasce da fé. Se o realista passa a ter fé, precisa, em virtude de seu realismo, admitir também o milagre.');
    
CREATE TABLE livro (
	idLivro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    autor VARCHAR(45),
    paisAutor VARCHAR(45),
    genero VARCHAR(45),
    descricao VARCHAR(300)
);

INSERT INTO livro (titulo, autor, paisAutor, genero, descricao) VALUES
	('Os Irmãos Karamazov', 'Fyodor Dostoevsky', 'Rússia', 'Romance', 'Os Irmãos Karamazov é um romance de Fiódor Dostoiévski, escrito em 1879, uma das mais importantes obras das literaturas russa e mundial, ou, conforme afirmou Freud: "a maior obra da história".');