package com.lms.database.entities

import com.lms.models.Group
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.UUIDTable
import java.util.UUID

object GroupTable : UUIDTable("group"){
    val number = ushort("number")
    val year = integer("year")
    val facility = reference("facility", FacilityTable)

}

class GroupDAO(id: EntityID<UUID>) : UUIDEntity(id){
    companion object : UUIDEntityClass<GroupDAO>(GroupTable)
    var number by GroupTable.number
    var year by GroupTable.year
    var facility by FacilityDAO referencedOn GroupTable.facility

    fun toModel(): Group {
        return Group(id.value,year,number, facility.toModel())
    }
}