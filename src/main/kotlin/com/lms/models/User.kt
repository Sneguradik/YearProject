package com.lms.models

import com.lms.serializers.UUIDSerializer
import kotlinx.serialization.Serializable
import java.util.UUID


@Serializable
data class User(
    @Serializable(with = UUIDSerializer::class) val id: UUID,
    val username: String, val name: String, val surname: String,
    val status: String, val group: Group?
)


