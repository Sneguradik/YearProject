package com.lms.models

import com.lms.serializers.UUIDSerializer
import kotlinx.serialization.Serializable
import java.util.*

@Serializable
data class Facility(
    @Serializable(with = UUIDSerializer::class) val id: UUID,
    val name: String,
)
