Create database salud;
use salud;

	create table if not exists pacientes(
	id_paciente int not null auto_increment,
	usuario varchar(255) not null,
	email varchar(255) not null,
	pass varchar(255) not null,
	primary key(id_paciente)
	);
    
    create table if not exists citas(
    id_cita int not null auto_increment PRIMARY KEY,
    cita_doctor int not null,
    horario varchar(50) not null,
    fecha date not null,
    foreign key (cita_doctor) references doctores (id_medico)
    );

	create table if not exists paciente_cita(
	id int not null auto_increment PRIMARY KEY,
    id_paciente int not null,
    id_cita int not null,
	foreign key (id_paciente) references pacientes (id_paciente),
    foreign key (id_cita) references citas (id_cita)
    );
    
    create table direccion (
    estado varchar (40) not null,
    cp int not null, 
    calle varchar(40) not null,
    num int not null,
    paciente_id int not null,
    foreign key (paciente_id) references pacientes (id_paciente)
    );
    
    
    

	create table if not exists administradores(
    id_administrador int not null auto_increment,
	user varchar(255) not null,
    email varchar(255)not null,
	password varchar(255) not null,
    primary key(id_administrador)
	);

insert into administradores (id_administrador,user,email,password)
values 
	(10,"admi1","admi1@gmail.com","salud+"),
	(2,"admi2","admi2@gmail.com","salud+");

create table if not exists doctores(
	id_medico int not null auto_increment,
	nombre varchar(255) not null,
	apellidos varchar(255) not null,
	email varchar(255) not null,
	direccion varchar(255)not null,
	tel varchar(255) not null,
    esp varchar(50) not null,
    info varchar(300) not null,
    image longblob not null,
    primary key(id_medico),
    foreign key (esp) references especialidad(esp) );
    
    
    
	create table if not exists especialidad(
	 esp varchar(50) not null primary key
	 
	);
    

		create table if not exists citas(
		fecha date not null,
		horario datetime not null,
		doctor int not null,
		paciente_id int not null,
		foreign key (doctor) references doctores (id_medico),
		foreign key (paciente_id) references pacientes(id_paciente)
		);

		create table direccion(
			paciente_id int not null,
			estado varchar(255) not null,
			cp varchar(255)not null,
			calle varchar(255) not null,
			numero varchar(255)not null,
			foreign key(paciente_id) references pacientes(id_paciente)
		);

