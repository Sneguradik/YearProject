package com.lms.database.entities

import com.lms.models.Facility
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.UUIDTable
import java.util.UUID

object FacilityTable : UUIDTable("Facility"){
    val name = varchar("name", 256)
}

class FacilityDAO(id : EntityID<UUID>) : UUIDEntity(id) {
    companion object : UUIDEntityClass<FacilityDAO>(FacilityTable)
    var name by FacilityTable.name

    fun toModel(): Facility {
        return Facility(id.value,name)
    }
}