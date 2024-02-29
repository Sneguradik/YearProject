package com.lms.database.entities


import com.lms.models.User
import org.jetbrains.exposed.dao.Entity
import org.jetbrains.exposed.dao.EntityClass
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.javatime.datetime
import java.util.UUID

object TokenTable : IntIdTable("tokens"){
    val user = reference("user", UserTable)
    val token = varchar("token", 128)
    val expiration = datetime("expiration")
}

object UserTable : UUIDTable("user"){
    val username = varchar("username", 256)
    val name = varchar("name",256)
    val surname = varchar("surname", 256)
    val status = varchar("status", 64)
    val group = reference("group",GroupTable).nullable()
}

class UserDAO(id: EntityID<UUID>) : UUIDEntity(id){
    companion object : UUIDEntityClass<UserDAO>(UserTable)
    val username by UserTable.username
    val name by UserTable.name
    val surname by UserTable.surname
    val status by UserTable.status
    val group by GroupDAO optionalReferencedOn UserTable.group
    val courses by CourseDAO via CourseUserTable

    fun toModel():User{
        return User(id.value, username,name,surname,status, group?.toModel(), courses.toList().map { it.toModel() }  )
    }
}

class TokenDAO(id: EntityID<Int>) : Entity<Int>(id){
    companion object : EntityClass<Int, TokenDAO>(TokenTable)

    val token by TokenTable.token
    val expiration by TokenTable.expiration
    val user by UserDAO referencedOn TokenTable.user
}


