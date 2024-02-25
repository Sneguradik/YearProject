package com.lms.database

import org.jetbrains.exposed.sql.*


object DatabaseSingleton {
    fun init() {
        val driverClassName = "org.postgresql.Driver"
        val jdbcURL = "jdbc:postgresql://localhost:5432/postgres"
        val username = System.getenv("db_username")
        val password = System.getenv("db_password")
        val database = Database.connect(jdbcURL, driverClassName, username, password)
    }
}