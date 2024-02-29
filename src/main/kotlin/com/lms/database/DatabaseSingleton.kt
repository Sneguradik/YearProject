package com.lms.database

import com.lms.database.entities.*
import com.lms.models.Group
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction


object DatabaseSingleton {
    fun init() {
        val driverClassName = "org.postgresql.Driver"
        val jdbcURL = "jdbc:postgresql://localhost:5432/postgres"
        val username = System.getenv("db_username")
        val password = System.getenv("db_password")
        val database = Database.connect(jdbcURL, driverClassName, username, password)
        transaction(database) {
            SchemaUtils.create(FacilityTable)
            SchemaUtils.create(GroupTable)
            SchemaUtils.create(UserTable)
            SchemaUtils.create(CourseTable)
            SchemaUtils.create(CourseUserTable)
        }
    }
}