CREATE DATABASE lendoMundo;

USE lendoMundo;

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

INSERT INTO usuario (nome, sobrenome, genero, email, senha, metaAnual) VALUES
	('Fábiam', 'Damaceno da Silva', 'masculino', 'fabiam.damaceno@gmail.com', MD5('L@pis123'), 12);
    
SELECT * FROM usuario;
    
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

INSERT INTO leitura (fkLeituraUsuario_Usuario, titulo, rating, autor, genAutor, paisAutor, genLiterario, dataLeitura, citacaoPreferida) VALUES
	('1', 'The Green Mile', 5, 'Stephen King', 'masculino', 'Estados Unidos', 'Suspense', '2023-01-12', ''),
	('1', 'Alice’s Adventures in Wonderland', 5, 'Lewis Carroll', 'masculino', 'Reino Unido', 'Fantasia', '2024-02-03', ''),
	('1', 'How to Read a Book', 4.5, 'Mortimer Adler', 'masculino', 'Estados Unidos', 'Técnico', '2023-02-03', ''),
	('1', 'The Apology of Socrates', 5, 'Plato', 'masculino', 'Grécia', 'Humanidades', '2023-02-04', ''),
	('1', 'The Murder of Roger Ackroyd', 5, 'Agatha Christie', 'feminino', 'Reino Unido', 'Suspense', '2023-02-07', ''),
	('1', 'The Cossacks', 5, 'Leo Tolstoy', 'masculino', 'Rússia', 'Romance', '2023-02-13', ''),
	('1', 'Cuentos de la Selva', 4, 'Horacio Quiroga', 'masculino', 'Uruguai', 'Infantil', '2023-02-16', ''),
	('1', 'The Screwtape Letters', 5, 'C.S. Lewis', 'masculino', 'Reino Unido', 'Humanidades', '2023-02-19', ''),
	('1', 'Pride and Prejudice', 4.5, 'Jane Austen', 'feminino', 'Reino Unido', 'Romance Romântico', '2023-03-02', ''),
	('1', 'The Autobiography of Benjamin Franklin', 4.5, 'Benjamin Franklin', 'masculino', 'Estados Unidos', 'Humanidades', '2023-03-07', ''),
	('1', 'Harry Potter y la Piedra Filosofal', 5, 'J.K. Rowling', 'feminino', 'Reino Unido', 'Fantasia', '2023-04-27', ''),
	('1', 'The Brothers Karamazov', 4.5, 'Fyodor Dostoevsky', 'feminino', 'Rússia', 'Fantasia', '2023-05-13', ''),
	('1', 'Men without Women', 4.5, 'Haruki Murakami', 'masculino', 'Japão', 'Romance', '2023-05-18', ''),
	('1', 'Harry Potter y la Camara Secreta', 5, 'J.K. Rowling', 'feminino', 'Reino Unido', 'Fantasia', '2023-06-21', ''),
	('1', 'Harry Potter y el Prisionero de Azkaban', 5, 'J.K. Rowling', 'feminino', 'Reino Unido', 'Fantasia', '2023-07-11', ''),
	('1', 'Harry Potter y el Cáliz de Fuego', 5, 'J.K. Rowling', 'feminino', 'Reino Unido', 'Fantasia', '2023-07-12', ''),
	('1', 'The Great Gatsby', 4.5, 'F. Scott Fitzgerald', 'masculino', 'Estados Unidos', 'Romance', '2023-07-15', ''),
	('1', 'Rita Hayworth and Shawshank Redemption', 5, 'Stephen King', 'masculino', 'Estados Unidos', 'Suspense', '2023-07-27', ''),
	('1', 'Harry Potter y la Orden del Fénix', 5, 'J.K. Rowling', 'feminino', 'Reino Unido', 'Fantasia', '2023-08-18', ''),
	('1', 'Harry Potter y el Misterio del Príncipe', 5, 'J.K. Rowling', 'feminino', 'Reino Unido', 'Fantasia', '2023-09-10', ''),
	('1', 'Harry potter y las Reliquias de la Muerte', 5, 'J.K. Rowling', 'feminino', 'Reino Unido', 'Fantasia', '2023-09-28', ''),
	('1', 'Frankenstein', 5, 'Mary Shelley', 'feminino', 'Reino Unido', 'Terror', '2023-10-07', ''),
	('1', 'Steppenwolf', 4, 'Hermann Hesse', 'masculino', 'Alemanha', 'Romance', '2023-10-08', ''),
	('1', 'The Myth of Sisyphus', 5, 'Albert Camus', 'masculino', 'Argélia', 'Humanidades', '2023-10-09', ''),
	('1', 'Cego é Aquele que só vê a Bola', 5, ' João Paulo França Streapco', 'masculino', 'Brasil', 'Humanidades', '2023-10-14', ''),
	('1', 'Cien Años de Soledad', 5, 'Gabriel García Márquez', 'masculino', 'Colômbia', 'Fantasia', '2023-11-02', '');

SELECT * from leitura;

SELECT count(genAutor), genAutor FROM leitura
	GROUP BY genAutor;
