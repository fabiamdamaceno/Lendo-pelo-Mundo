CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    sobrenome VARCHAR(45),
    genero VARCHAR(9),
		CONSTRAINT chkGenero CHECK (genero IN ('masculino', 'feminino', 'outros')),
    email VARCHAR(45) NOT NULL,
		CONSTRAINT chkEmail CHECK (email LIKE '%@%'),
    senha VARCHAR(45) NOT NULL
);

INSERT INTO usuario (nome, sobrenome, genero, email, senha) VALUES
	('Fábiam', 'Damaceno da Silva', 'masculino', 'fabiam.damaceno@gmail.com', MD5('L@pis123'));
    
CREATE TABLE leitura (
	idLeituraUsuario INT PRIMARY KEY AUTO_INCREMENT,
    fkLeituraUsuario_Usuario INT,
		CONSTRAINT fkReLeituraUsuario_Usuario
		FOREIGN KEY (fkLeituraUsuario_Usuario)
        REFERENCES idUsuario(usuario),
	titulo VARCHAR(100),
    autor VARCHAR(45),
    paisAutor VARCHAR(45),
    genero VARCHAR(45),
    rating DECIMAL(4,2),
    citacaoPreferida VARCHAR(300)
);
    
INSERT INTO leitura (fkLeituraUsuario_Usuario, titulo, autor, paisAutor, genero, rating, citacaoPreferida) VALUES
	('1', 'Os Irmãos Karamazov', 'Fyodor Dostoevsky', 'Rússia', 'Romance', 5, 'Para o realista, não é a fé que nasce do milagre: é o milagre que nasce da fé. Se o realista passa a ter fé, precisa, em virtude de seu realismo, admitir também o milagre.');
    
CREATE TABLE livro (
	idLivro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    autor VARCHAR(45),
    paisAutor VARCHAR(45),
    genero VARCHAR(45),
    descricao VARCHAR(300)
);

INSERT INTO leitura (titulo, autor, paisAutor, genero, descricao, citacaoPreferida) VALUES
	('Os Irmãos Karamazov', 'Fyodor Dostoevsky', 'Rússia', 'Romance', 'Os Irmãos Karamazov é um romance de Fiódor Dostoiévski, escrito em 1879, uma das mais importantes obras das literaturas russa e mundial, ou, conforme afirmou Freud: "a maior obra da história".');