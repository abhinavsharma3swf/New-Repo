package com.bridge.example.nutritiontrackerbackend.Repository;

import com.bridge.example.nutritiontrackerbackend.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
}
