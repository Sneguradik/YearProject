package com.lms.models

import com.lms.serializers.UUIDSerializer
import kotlinx.serialization.Serializable
import java.util.UUID
@Serializable
data class Course(
    @Serializable(with = UUIDSerializer::class) val id: UUID,
    val name: String, val participants: List<User>
)
