package com.lms.database.entities

import com.lms.models.Course
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.Table
import java.util.UUID

object CourseTable : UUIDTable("course"){
    val name = varchar("name", 256)
}

object CourseUserTable : Table("course_user"){
    val course = reference("course" , CourseTable)
    val user = reference("user", UserTable)
    override val primaryKey = PrimaryKey(course, user, name = "PK_CourseUser")
}

class CourseDAO(id: EntityID<UUID>) : UUIDEntity(id){
    companion object : UUIDEntityClass<CourseDAO>(CourseTable)
    val name by CourseTable.name
    val participants by UserDAO via CourseUserTable

    fun toModel(): Course {
        return Course(id.value, name, participants.toList().map { it.toModel() })
    }
}