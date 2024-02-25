package com.lms.models

import com.lms.serializers.UUIDSerializer
import kotlinx.serialization.Serializable
import java.util.UUID

@Serializable
data class Group(
    @Serializable(with = UUIDSerializer::class) val id:UUID,
    val year: Int, val number: Short, val facility: Facility
)
