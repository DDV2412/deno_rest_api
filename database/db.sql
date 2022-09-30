-- Create Database
create database if not exists deno_rest;

--Create Table Journal
create table journals(
	id uuid not null primary key,
	name varchar not null,
	thumbnail varchar not null,
	cover varchar not null,
	publisher varchar not null,
	abbreviation varchar (12) not null unique,
	issn varchar (12) not null unique,
	e_issn varchar (12) not null unique,
	description text not null,
	base_url varchar not null unique,
	submission varchar null,
	scope text null,
	author_guidelines text null,
	created_at timestamp not null default current_timestamp,
	updated_at timestamp not null default current_timestamp
);